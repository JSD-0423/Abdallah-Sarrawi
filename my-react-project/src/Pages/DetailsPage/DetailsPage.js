import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import TopicTitleContainer from "../../components/TopicTitleContainer/TopicTitleContainer";
import styles from "./DetailsPage.module.css";
import RelatedTopics from "../../components/RelatedTopics/RelatedTopics";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import axios from "axios";

const DetailsPage = () => {
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
            <TopicTitleContainer
              title={pageDetails.topic}
              info={pageDetails.category}
            />
            <div className={styles.ratingBox}>
              <i>
                <ion-icon className={styles.starIcon} name="star"></ion-icon>
                <ion-icon className={styles.starIcon} name="star"></ion-icon>
                <ion-icon className={styles.starIcon} name="star"></ion-icon>
                <ion-icon className={styles.starIcon} name="star">
                  {" "}
                </ion-icon>
                <ion-icon
                  className={styles.starIcon}
                  name="star-outline"
                ></ion-icon>
              </i>
            </div>
            <div className={styles.infoBox}>
              <p>{pageDetails.description}</p>
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
