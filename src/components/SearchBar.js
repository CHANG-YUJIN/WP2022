import React from "react";
import "../static/css/SearchBarStyle.css";

const SearchBar = (props) => {
  const classes = "search " + props.className;
  return (
    <>
    <div className="search-container">
    <form className={classes}>
      <input
        className="searchBox"
        type="text"
        placeholder={props.placeholder}
      />
      <button className="search-btn" type="submit" />
    </form>
    <div className="css-purpose">
    </div>
    </div>
    </>
  );
};

export default SearchBar;
