import React from "react";
import styles from "./SearchResult.module.css";

const SearchResult = ({ text }) => {
  return (
    <div className={styles.searchResult}>
      <p>{text}</p>
    </div>
  );
};
export default SearchResult;
