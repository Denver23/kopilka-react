import React from "react";
import RadioButton from "./RadioButton/RadioButton";
import s from './RadioButtons.module.scss'
import {Field, reduxForm} from "redux-form";

const RadioButtons = ({ handleSubmit, fields, ...props }) => {
    return (
        <form className={s.radioButtons}>
            {fields.map(field => (
                <Field name={props.form} component={RadioButton} field={field} props={{'value': field.name}} key={field.name} />
            ))}
        </form>

    )
}

const RadioButtonsRedux = reduxForm({})(RadioButtons);

export default RadioButtonsRedux;