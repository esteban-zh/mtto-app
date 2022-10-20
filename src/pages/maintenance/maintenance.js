import React from "react";
import styles from "./style.module.scss";
import PortalReactDOM from 'react-dom'
import Button from "../../components/button/button";
import TextField from "../../components/textField/textField";
import Select from "../../components/select/select";
import FormControl from "../../components/formControl/formControl";


const Maintenance = ({mtto, onClose}) => {
    // const {onClose} = props.onClose;
    // console.log("esto es onclose", props.onClose)
    // console.log("mantenimiento", props.mtto)
  const node = (
    <div className={styles.modalContainer}>
      <div className={styles.modalBox}>
        <h1 onClick={onClose}>mantenimiento</h1>

        <Button 
            type="outline"
            onClick={onClose}
            label="cancel"
            disabled={false}
        />
        <FormControl type="block">
        <TextField />
        <TextField />
        </FormControl>
        <Select 
            options={[
                {
                  label:'option 1',
                  value:'val1'
                },
                {
                  label:'option 2',
                  value:'val2'
                },
            ]}
            value={'value'}
            onChange= {() => {}}
            onBlur={() => []}
            placeholder="choose an option"
        />
      </div>
    </div>
  );
  return PortalReactDOM.createPortal(node, document.getElementById("modal-root"));
};

export default Maintenance;
