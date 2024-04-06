import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { fetchPictures } from "./picturesApi";
import { Modal } from "./Modal/Modal";

function App() {
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalImage, setModalImage] = useState(false);
  const [isShownModal, setIsShownModal] = useState(false);
  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPictures([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleModalImage = (picture) => {
    setModalImage(picture);
    toggleModal();
  };

  const toggleModal = () => {
    setIsShownModal((prev) => !prev);
  };

  useEffect(() => {
    async function getImages() {
      if (!query) {
        return;
      }
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchPictures(query, page);
        setPictures((prevData) => {
          return [...prevData, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [page, query]);
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {pictures.length > 0 && (
        <ImageGallery pictures={pictures} handleModalImage={handleModalImage} />
      )}
      {!isLoading && pictures.length === 0 && query && <p>Nothing was found</p>}
      {!isLoading && pictures.length > 0 && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
      {isShownModal && (
        <Modal toggleModal={toggleModal}>
          <img src={modalImage} alt="" />
        </Modal>
      )}
    </div>
  );
}

export default App;
