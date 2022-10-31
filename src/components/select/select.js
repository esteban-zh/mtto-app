import React, { useState } from "react";
import TextField from "../textField/textField";
import styles from "./style.module.scss";

// const initialIsOpen = false;

const Select = (props) => {
  const { options, value, onChange, onBlur, placeholder } = props;
  const [isOpen, setIsOpen] = useState(false);
//   console.log("isopne", isOpen)
  return (
    <div className={styles.option}>
      <TextField
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={() => {}}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li
              className={styles.optionListItem}
              key={option.value}
              onClick={(e) => {
                onChange(option.value);
                onBlur(e);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
