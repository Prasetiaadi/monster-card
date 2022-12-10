import './searchBox.css';

const SearchBox = ({ className, placeholder, handleChange }) => {
  return (
    <div className="box">
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;
