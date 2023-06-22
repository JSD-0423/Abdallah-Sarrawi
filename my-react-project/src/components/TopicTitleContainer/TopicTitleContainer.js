import React from "react";
import styles from "./TopicTitleContainer.module.css";

const TopicTitleContainer = ({ title, info, category }) => {
  return (
    <div className={styles.topicTitleContainer}>
      <h4>{info}</h4>
      <h3>{title}</h3>
    </div>
  );
};
export default TopicTitleContainer;
