import React, { useState, useEffect, useRef } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SearchBox from "../../components/SearchBox/SearchBox";
import SearchResult from "../../components/SearchResult/SearchResult";
import styles from "./HomePage.module.css";
import axios from "axios";
import { sortData, sortOptions } from "./utils";

const HomePage = () => {
  const [cardsData, setCardsData] = useState([]);
  // filter dropdown states
  const [filterCategory, setFilterCategory] = useState([]);
  // search value states
  const [searchInput, setSearchInput] = useState("");

  const [originalFetchedData, setOriginalFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tap-web-1.herokuapp.com/topics/list"
        );
        setCardsData(response.data);
        setOriginalFetchedData(response.data);
        const uniqueCategories = new Set(
          response.data.map((item) => item.category)
        );
        const filterCategoryObject = [...uniqueCategories].map((item) => {
          return { label: item, value: item };
        });
        setFilterCategory(filterCategoryObject);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchInput}`
        );
        setCardsData(response.data);
        setOriginalFetchedData(response.data);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);

  const onTextChange = (text) => {
    setSearchInput(text);
  };

  const onFilterDropdownChange = (dropdownValue) => {
    if (dropdownValue === "Default") {
      setCardsData(originalFetchedData);
    } else {
      const filteredData = originalFetchedData.filter(
        (card) => card.category === dropdownValue
      );
      setCardsData(filteredData);
    }
  };

  const onSortDropdownChange = (dropdownValue) => {
    if (dropdownValue === "Default") {
      setCardsData([...originalFetchedData]);
    } else {
      const sortedData = sortData(dropdownValue, cardsData);
      setCardsData([...sortedData]);
    }
  };

  console.log("cardsData", cardsData);
  return (
    <div className={styles.contentContainer}>
      <SearchBox
        searchInput={searchInput}
        onSearchInputChange={onTextChange}
        filterOptions={filterCategory}
        onFilterDropdownChange={onFilterDropdownChange}
        onSortDropdownChange={onSortDropdownChange}
        sortOptions={sortOptions}
      />

      <SearchResult text={`"24" Web Topics Found`} />
      <CardsContainer data={cardsData} />
    </div>
  );
};

export default HomePage;
