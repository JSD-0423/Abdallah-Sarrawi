import React from "react";
import styles from "./SearchBox.module.css";
import DropDown from "../DropDown/DropDown";

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <div className={styles.searchBar}>
        <i className={styles.searchIcon}>
          <ion-icon name="search-outline"></ion-icon>
        </i>
        <input
          id="search-bar-input"
          type="text"
          placeholder="Search the website..."
        />
      </div>
      <div className={styles.dropDownContainer}>
        <DropDown label={"Sort by:"} id={"sortBy"} />
        <DropDown label={"Filter by:"} id={"filterBy"} />
      </div>
    </div>
  );
};

export default SearchBox;
