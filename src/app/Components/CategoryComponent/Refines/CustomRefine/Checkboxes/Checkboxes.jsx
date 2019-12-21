import React from "react";
import Checkbox from "./Checkbox/Checkbox";
import s from './Checkboxes.module.scss'

const Checkboxes = (props) => {

    let toggler = (target, activeClass) => {
        if (props.onClick !== undefined) {
            if(!target.classList.contains(activeClass)) {
                props.onClick({"refine": props.name,"key": target.dataset.key, "action": "enable"});
            } else {
                props.onClick({"refine": props.name,"key": target.dataset.key, "action": "disable"});
            }
        }
    }

    return (
        <div className={s.checkboxBody}>
            {props.values.map((e) => {
                return <Checkbox text={e} toggler={toggler}/>
            })}
        </div>

    )
}

export default Checkboxes;