import React from "react";
import styles from "./DetailsCard.module.css";

const DetailsCard = (img, cardInfo) => {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.ImgBanner}>
        <img src="assets/${topicImage}" />
      </div>
      <div className={styles.CardInfo}>
        <div className={styles.AuthorBox}>
          <p>{/* <b>{cardTopic}</b> by <a href="#">{authorName}</a> */}</p>
        </div>
        <div className={styles.FeedbackBox}>
          <p>Interested about this topic?</p>
          <button className={styles.AddToFav}>
            Add to Favourites
            <i className={styles.FavIcon}>
              <ion-icon name="heart-outline"></ion-icon>
            </i>
          </button>
          <h6>Unlimited Credits</h6>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
