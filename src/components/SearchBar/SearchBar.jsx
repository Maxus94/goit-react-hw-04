import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSearch }) => {
  const notify = () => toast.error("Search field can't be empty!");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchString = evt.target.elements.search.value.trim();
    if (!searchString) {
      notify();
    } else {
      onSearch(searchString);
    }
  };
  return (
    <header className={css.searchBar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit"></button>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
