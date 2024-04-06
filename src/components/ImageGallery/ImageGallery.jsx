import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ pictures, handleModalImage }) => {
  return (
    <ul>
      {pictures.map((picture) => (
        <li key={picture.id}>
          <ImageCard picture={picture} handleModalImage={handleModalImage} />
        </li>
      ))}
    </ul>
  );
};
