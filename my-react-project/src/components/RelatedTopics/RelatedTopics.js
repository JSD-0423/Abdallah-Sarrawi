import React from "react";
import styles from "./RelatedTopics.module.css";

const relatedTopics = () => {
  return (
    <div className={styles.RelatedTopicsContainer}>
      <div className={styles.SubTopicsContainer}>
        <div className={styles.SubTopic}>
          <p>HTML Sub Topics</p>
        </div>
        {/* {subTopicsHTML} */}
      </div>
    </div>
  );
};
export default relatedTopics;
