import css from "./ImageCard.module.css";

const ImageCard = ({ picture, handleModalImage }) => {
  return (
    <img
      className={css.ImageGalleryItemImage}
      src={picture.urls.small}
      alt={picture.description}
      onClick={() => handleModalImage(picture.urls.regular)}
    />
  );
};

export default ImageCard;
