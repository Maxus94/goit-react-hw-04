export const ImageCard = ({ picture, handleModalImage }) => {
  return (
    <div>
      <img
        src={picture.urls.small}
        alt={picture.description}
        onClick={() => handleModalImage(picture.urls.regular)}
      />
    </div>
  );
};
