import React from "react";
import styles from "./style.module.scss";
import PortalReactDOM from 'react-dom'


const Maintenance = ({mtto, onClose}) => {
    // const {onClose} = props.onClose;
    // console.log("esto es onclose", props.onClose)
    // console.log("mantenimiento", props.mtto)
  const node = (
    <div className={styles.modalContainer}>
      <div className={styles.modalBox}>
        <h1 onClick={onClose}>mantenimiento</h1>
      </div>
    </div>
  );
  return PortalReactDOM.createPortal(node, document.getElementById("modal-root"));
};

export default Maintenance;
