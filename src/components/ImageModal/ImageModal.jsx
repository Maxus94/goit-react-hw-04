import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export const ImageModal = ({ modalImage, isShownModal, closeModal, descr }) => {
  return (
    <Modal
      isOpen={isShownModal}
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={modalImage} alt={descr} />
    </Modal>
  );
};
