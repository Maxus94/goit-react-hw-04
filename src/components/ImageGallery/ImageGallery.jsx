import { useEffect } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ pictures, handleModalImage }) => {
  useEffect(() => {
    window.scrollBy({
      top: 260 * 3 + 48,
      behavior: "smooth",
    });
  }, [pictures]);
  return (
    <ul className={css.gallery}>
      {pictures.map((picture) => (
        <li className={css.galleryItem} key={picture.id}>
          <ImageCard picture={picture} handleModalImage={handleModalImage} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
