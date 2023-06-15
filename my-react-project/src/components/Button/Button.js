import React from "react";
import styles from "./Button.module.css";

const Button = ({ iconName, text, onClick }) => {
  return (
    <button className={styles.button} id="mode-button">
      <i>
        <ion-icon name={iconName}></ion-icon>
      </i>
      <span id="btn-text">{text}</span>
    </button>
  );
};
export default Button;
