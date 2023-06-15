import React from "react";
import styles from "./ContentContainer.module.css";
import SearchBox from "../SearchBox/SearchBox";
import SearchResult from "../SearchResult/SearchResult";

import CardsContainer from "../CardsContainer/CardsContainer";

const ContentContainer = () => {
  return (
    <div className={styles.contentContainer}>
      <SearchBox />
      <SearchResult text={`"24" Web Topics Found`} />
      <CardsContainer />
    </div>
  );
};

export default ContentContainer;
