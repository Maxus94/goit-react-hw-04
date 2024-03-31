import css from "./SearchBar.module.css";
export const SearchBar = () => {
  return (
    <header className={css.searchBar}>
      <form>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
