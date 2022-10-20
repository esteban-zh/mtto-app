import React from 'react'
import styles from './style.module.scss'

const Button = (props) => {
  const { type, onClick, label, disabled } = props
  console.log("type", type)
  console.log("onclick", onClick)
  console.log("label", label)
  console.log("disabled", disabled)
  const className = styles[type];
  console.log("styles", className)
  return (
    <div className={`${className} ${disabled ? styles.disabled : ''}`}
    onClick={(e) => {
      if (disabled) {
        return;
      }
      onClick(e);
      }}>
      {label}
    </div>
  )
}

export default Button;