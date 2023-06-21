import React from "react";
import styles from "./DropDown.module.css";

const DropDown = ({ label, options, id, onDropdownChange }) => {
  return (
    <div className={styles.dropDown} id={id}>
      <label>{label}</label>
      <select
        id="sort"
        onChange={(e) => {
          onDropdownChange(e.target.value);
        }}
      >
        <option value="Default">Default</option>
        {options.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default DropDown;
