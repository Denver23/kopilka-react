import React from "react";
import s from './RadioButton.module.scss'

const RadioButton = ({ input, field, ...props}) => {
    let active = (input.value === field.name) ? s.active : '';
    return (
        <label className={`${s.radioButton} ${active}`} data-key={field.name}>
            <input {...input} value={props.value} type={'radio'} className={s.hiddenInput} />
            <div className={s.radioCircle}></div>
            <span>{field.placeholder}</span>
        </label>
    )
}

export default RadioButton;