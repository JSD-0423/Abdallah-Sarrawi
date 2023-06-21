import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import TopicTitleContainer from "../../components/TopicTitleContainer/TopicTitleContainer";
import styles from "./DetailsPage.module.css";
import RelatedTopics from "../../components/RelatedTopics/RelatedTopics";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import axios from "axios";

const DetailsPage = (subTopicsHTML, cardTopic, authorName) => {
  const location = useLocation();
  const [pageDetails, setPageDetails] = useState({});

  console.log("pageDetails", pageDetails);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://tap-web-1.herokuapp.com/topics/details/${location.state.id}`
        );
        setPageDetails(response.data);
      } catch (error) {
        // Handle the error
        console.error(error.message);
      }
    };
    fetchData();
  }, [location]);

  return (
    <div className={styles.detailsContentContainer}>
      <div className={styles.detailsBackgroundContainer}>
        <div className={styles.detailsBox}>
          <div className={styles.detailsContainer}>
            <TopicTitleContainer />
            <div className={styles.ratingBox}>
              <i>
                <ion-icon className={styles.starIcon} name="star"></ion-icon>
                <ion-icon className={styles.starIcon} name="star"></ion-icon>
                <ion-icon className={styles.starIcon} name="star"></ion-icon>
                <ion-icon className={styles.starIcon} name="star"></ion-icon>
                <ion-icon
                  className={styles.starIcon}
                  name="star-outline"
                ></ion-icon>
              </i>
            </div>
            <div className={styles.infoBox}>
              <p>
                HTML (Hypertext Markup Language) is the standard markup language
                for creating web pages and other information that can be
                displayed in a web browser. it provides a structure for content
                and defines how it should be displayed on a web page, including
                text, images, and multimedia. HTML is essential for creating
                static web pages and is a foundational technology for the World
                Wide Web.
              </p>
            </div>
          </div>
        </div>
      </div>
      <RelatedTopics />
      <DetailsCard />
    </div>
  );
};
export default DetailsPage;
