import React from "react";
import styles from "./DropDown.module.css";

// const options = [
//   { value: "sdfsdf", text: "asdasdas" },
//   { value: "sdfsdf", text: "asdasdas" },
// ];
const DropDown = ({ label, options, id }) => {
  return (
    <div className={styles.dropDown} id={id}>
      <label>{label}</label>
      <select id="sort">
        <option value="Default">Default</option>
        {options?.map((option) => {
          return <option value={option.value}>{option.text}</option>;
        })}
      </select>
    </div>
  );
};
export default DropDown;
