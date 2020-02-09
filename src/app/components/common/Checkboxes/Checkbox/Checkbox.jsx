import React from "react";
import s from './Checkbox.module.scss'

const Checkbox = ({ input, field }) => {
    let active = input.value ? s.active : '';
    return (
        <label className={`${s.checkboxButton} ${active}`} data-key={field.name}>
            <input {...input} type={'checkbox'} name={input.name} className={s.hiddenInput}/>
            <div className={s.checkIcon}></div>
            <span>{field.placeholder}</span>
        </label>
    )
}


export default Checkbox;