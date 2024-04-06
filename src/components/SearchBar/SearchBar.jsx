import css from "./SearchBar.module.css";
export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(evt.target.elements.search.value);
  };
  return (
    <header className={css.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
