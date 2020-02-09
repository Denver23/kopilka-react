import React from "react";
import Checkbox from "./Checkbox/Checkbox";
import s from './Checkboxes.module.scss';
import {Field, reduxForm} from "redux-form";

const Checkboxes = ({ handleSubmit, fields, ...props }) => {
    return (
        <form className={s.checkboxBody}>
            {fields.map(field => (
                    <Field name={field.name} component={Checkbox} field={field} key={field.name} />
            ))}
        </form>
    )

}


const CheckboxesRedux = reduxForm({})(Checkboxes);

export default CheckboxesRedux;