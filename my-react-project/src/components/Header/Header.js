import React from "react";
import styles from "./Header.module.css";
import Button from "../Button/Button";

function Header() {
  return (
    <div className={styles.headerBox}>
      <h1 className={styles.title}>Web Topics</h1>
      <div className={styles.btns}>
        <Button iconName={"moon-outline"} text={"Dark Mode"} />
        <Button iconName={"heart-outline"} text={"Favourite"} />
      </div>
    </div>
  );
}
export default Header;
