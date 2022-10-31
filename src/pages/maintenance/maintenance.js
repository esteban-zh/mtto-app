import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from 'yup';
import styles from "./style.module.scss";
import PortalReactDOM from "react-dom";
import Button from "../../components/button/button";
import TextField from "../../components/textField/textField";
import Select from "../../components/select/select";
import FormControl from "../../components/formControl/formControl";
import { createMaintenance, deleteMaintenance, updateMaintenance} from '../../services/firebase';

const formSchema = yup.object().shape({
    equipment: yup.string().min(1).required(),
    author: yup.string().min(1).required(),
    activity: yup.string().required(),
})

const Maintenance = ({ mtto, onClose }) => {

  const onSubmit = async (values, formikBag) => {
    if (mtto.id) {
        await updateMaintenance(mtto.id, values);
    } else {
        await createMaintenance(values);
    }

    formikBag.setSubmitting(false);
    onClose();
  }

  const onDelete = async () => {
    await deleteMaintenance(mtto.id)
    onClose();
  }

  const onCancel = () => {
    onClose();
  }
  const node = (
    <div className={styles.modalContainer}>
      <div className={styles.modalBox}>
        <h1 onClick={onClose}>ORDEN</h1>
        <Formik 
          initialValues={{
            equipment: mtto.equipment || '',
            author: mtto.author || '',
            activity: mtto.activity || '',
          }}
          validationSchema={formSchema}
          onSubmit={onSubmit}
          render={(props) => {
            const {
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              isValid,
            } = props;

            return (
            <>
                <FormControl type='row'>
                    <Select
                        value={values.equipment}
                        onChange={handleChange('equipment')}
                        onBlur={handleBlur('equipment')}
                        placeholder="equipo"
                        options={[
                          {
                            label: "cortadora",
                            value: "cortadora",
                          },
                          {
                            label: "extendedora",
                            value: "extendedora",
                          },
                          {
                            label: "plotter",
                            value: "plotter",
                          },
                        ]}
                    />
                    <ErrorMessage name="equipment" />
                </FormControl>
                <FormControl type='row'>
                    <Select
                        value={values.author}
                        onChange={handleChange('author')}
                        onBlur={handleBlur('author')}
                        placeholder="author"
                        options={[
                          {
                            label: "Eduard",
                            value: "Eduard",
                          },
                          {
                            label: "Carlos",
                            value: "Carlos",
                          },
                          {
                            label: "Jairo",
                            value: "Jairo",
                          },
                        ]}
                    />
                    <ErrorMessage name="author" />
                </FormControl>
                <FormControl type="block">
                    <TextField 
                        value={values.activity}
                        onChange={handleChange('activity')}
                        onBlur={handleBlur('activity')}
                        placeholder="activity"
                    />
                    <ErrorMessage name="activity" />
                </FormControl>
                <FormControl type='block'>
                    <Button
                      type="outline"
                      disabled={isSubmitting || !isValid}
                      onClick={handleSubmit}
                      label={mtto.id ? 'Update' : 'Create'}
                    />
                      <Button
                        type="outline"
                        onClick={onCancel}
                        label="cancel"
                      />
                     {mtto.id && <Button
                        type="warning"
                        onClick={onDelete}
                        label="delete"
                      />}
                </FormControl>
            </>
            )
          }}
        />         
      </div>
    </div>
  );
  return PortalReactDOM.createPortal(
    node,
    document.getElementById("modal-root")
  );
};

Maintenance.defaultProps = {
    mtto: {},
}

export default Maintenance;
