import React from "react";
import styles from "./Header.module.css";
import OutLineButton from "../OutLineButton/OutLineButton";

function Header() {
  return (
    <div className={styles.headerBox}>
      <h1 className={styles.title}>Web Topics</h1>
      <div className={styles.btns}>
        <OutLineButton iconName={"moon-outline"} text={"Dark Mode"} />
        <OutLineButton iconName={"heart-outline"} text={"Favourite"} />
      </div>
    </div>
  );
}
export default Header;
