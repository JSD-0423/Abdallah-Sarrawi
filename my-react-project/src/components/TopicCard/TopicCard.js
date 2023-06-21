import React from "react";
import styles from "./TopicCard.module.css";

const TopicCard = ({
  imgUrl,
  category,
  title,
  author,
  onCardClick,
  rating,
}) => {
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
        Rating: {rating}
        <div className={styles.authorBox}>
          <p>Author: {author}</p>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
