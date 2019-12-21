import React from "react";
import RadioButton from "./RadioButton/RadioButton";
import s from './RadioButtons.module.scss'

const RadioButtons = (props) => {

    let toggler = (target, activeClass) => {
        let radioBody = target.closest(`.${s.radioButtons}`);

        if (!target.classList.contains(activeClass)) {
            if (radioBody.getElementsByClassName(activeClass)[0] !== undefined) {
                radioBody.getElementsByClassName(activeClass)[0].classList.remove(activeClass);
            }
        }
        if (props.onClick !== undefined) {
            if(!target.classList.contains(activeClass)) {
                props.onClick({"refine": props.name,"key": target.dataset.key, "action": "enable"});
            } else {
                props.onClick({"refine": props.name,"key": target.dataset.key, "action": "disable"});
            }
        }
    }

    return (
        <div className={s.radioButtons}>
            {props.values.map((e) => {
                return <RadioButton text={e} toggler={toggler}/>
            })}
        </div>

    )
}

export default RadioButtons;