import React from "react";
import styles from "./SearchBox.module.css";
import DropDown from "../DropDown/DropDown";

const SearchBox = ({
  searchInput,
  onSearchInputChange,
  filterOptions,
  sortOptions = [],
  onFilterDropdownChange,
  onSortDropdownChange,
}) => {
  return (
    <div className={styles.searchBox}>
      <div className={styles.searchBar}>
        <i className={styles.searchIcon}>
          <ion-icon name="search-outline"></ion-icon>
        </i>
        <input
          value={searchInput}
          onChange={(e) => onSearchInputChange(e.target.value)}
          id="search-bar-input"
          type="text"
          placeholder="Search the website..."
        />
      </div>
      <div className={styles.dropDownContainer}>
        <DropDown
          label={"Sort by:"}
          id={"sortBy"}
          options={sortOptions}
          onDropdownChange={onSortDropdownChange}
        />
        <DropDown
          label={"Filter by:"}
          id={"filterBy"}
          options={filterOptions}
          onDropdownChange={onFilterDropdownChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
