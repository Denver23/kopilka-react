import React from "react";
import s from './RadioButton.module.scss'

const RadioButton = (props) => {

    let toggleButtons = (button) => {
        let radioButton = button.target.closest(`.${s.radioButton}`);
        props.toggler(radioButton, s.active);
        radioButton.classList.toggle(s.active);
    }

    return (
        <div className={s.radioButton} onClick={toggleButtons} data-key={props.text}>
            <div className={s.radioCircle}></div>
            <span>{props.text}</span>
        </div>
    )
}

export default RadioButton;