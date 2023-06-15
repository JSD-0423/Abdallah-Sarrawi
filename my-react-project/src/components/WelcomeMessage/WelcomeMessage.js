import React from "react";
import styles from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <div className={styles.welcomeMessageContainer}>
      <div className={styles.welcomeBackground1}></div>
      <div className={styles.welcomeBackground2}></div>
      <div className={styles.welcomeMessageHeaders}>
        <h2>Welcome to our website!</h2>
        <p>We have a new design that's fresh, modern, and easy to use.</p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
