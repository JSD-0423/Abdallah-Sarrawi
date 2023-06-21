import React from "react";
import styles from "./OutLineButton.module.css";

const OutLineButton = ({ iconName, text, onClick }) => {
  return (
    <button className={styles.button} id="mode-button">
      <i>
        <ion-icon name={iconName}></ion-icon>
      </i>
      <span id="btn-text">{text}</span>
    </button>
  );
};
export default OutLineButton;
