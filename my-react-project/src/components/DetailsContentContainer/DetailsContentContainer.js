import React from "react";
import styles from "./DetailsContentContainer.module.css";
import TopicTitleContainer from "../TopicTitleContainer/TopicTitleContainer";

const DetailsContentContainer = () => {
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
    </div>
  );
};

export default DetailsContentContainer;
