import React from "react";
import s from './Checkbox.module.scss'

const Checkbox = (props) => {

    let toggleButtons = (button) => {
        let radioButton = button.target.closest(`.${s.checkboxButton}`);
        props.toggler(radioButton, s.active);
        radioButton.classList.toggle(s.active);
    }

    return (
        <div className={s.checkboxButton} onClick={toggleButtons} data-key={props.text}>
            <div className={s.checkIcon}></div>
            <span>{props.text}</span>
        </div>
    )
}

export default Checkbox;