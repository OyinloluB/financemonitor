import React from "react";
import Styles from "./search.module.css";

const Search = () => {
  return (
    <div>
      <div className={Styles.search}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          className={Styles.searchField}
        />
      </div>
    </div>
  );
};

export default Search;
