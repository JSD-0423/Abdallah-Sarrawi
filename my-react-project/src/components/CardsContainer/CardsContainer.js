import React from "react";
import styles from "./CardsContainer.module.css";

import { useNavigate } from "react-router-dom";
import TopicCard from "../TopicCard/TopicCard";

const CardsContainer = (props) => {
  const cardsData = props.data;
  // console.log("cardsData", cardsData);
  const navigate = useNavigate();

  const onCardClick = (topicId) => {
    navigate("/details", {
      state: {
        id: topicId,
      },
    });
  };
  return (
    <div className={styles.cardsContainer}>
      {cardsData.map((item) => (
        <TopicCard
          key={item.id}
          title={item.topic}
          imgUrl={"../assets/" + item.image}
          author={item.name}
          category={item.category}
          onCardClick={() => onCardClick(item.id)}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
