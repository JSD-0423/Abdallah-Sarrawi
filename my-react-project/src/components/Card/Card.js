import React from "react";
import styles from "./Card.module.css";

const Card = ({ imgUrl, category, title, author, onCardClick }) => {
  console.log("imgUrl", imgUrl);
  return (
    <div className={styles.cardContainer} onClick={onCardClick}>
      <div className={styles.imgBanner}>
        <img src={imgUrl} alt={title} />
      </div>
      <div className={styles.cardDetails}>
        <div className={styles.cardInfo}>
          <p>{category}</p>
          <h5>
            <b>{title}</b>
          </h5>
        </div>
        <div className={styles.starBox}>
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
        <div className={styles.authorBox}>
          <p>Author: {author}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
