import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button className={css.button} onClick={handleLoadMore}>
      Load more
    </button>
  );
};
