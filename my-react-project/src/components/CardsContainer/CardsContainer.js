import React from "react";
import styles from "./CardsContainer.module.css";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

const CardsContainer = () => {
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
      <Card
        title={"HTML"}
        imgUrl={"./assets/html.png"}
        author={"Sarah Smith"}
        category={"Web Development Language"}
        onCardClick={() => onCardClick(6)}
      />
      <Card
        title={"HTML"}
        imgUrl={"./assets/html.png"}
        author={"Sarah Smith"}
        category={"Web Development Language"}
        onCardClick={() => onCardClick(6)}
      />
      <Card
        title={"HTML"}
        imgUrl={"./assets/html.png"}
        author={"Sarah Smith"}
        category={"Web Development Language"}
        onCardClick={() => onCardClick(6)}
      />
      <Card
        title={"HTML"}
        imgUrl={"./assets/html.png"}
        author={"Sarah Smith"}
        category={"Web Development Language"}
        onCardClick={() => onCardClick(6)}
      />
      <Card
        title={"HTML"}
        imgUrl={"./assets/html.png"}
        author={"Sarah Smith"}
        category={"Web Development Language"}
        onCardClick={() => onCardClick(6)}
      />
    </div>
  );
};

export default CardsContainer;
