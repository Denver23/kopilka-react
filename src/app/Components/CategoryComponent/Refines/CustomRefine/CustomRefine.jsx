import React from "react";
import RadioButtons from "./RadioButtons/RadioButtons";
import Checkboxes from "./Checkboxes/Checkboxes";
import s from './CustomRefine.module.scss';

const CustomRefine = (props) => {
    let refineBody;
    if(props.type === "radio") {
        refineBody = <RadioButtons name={props.name} values={props.items} onClick={(active) => {console.log(active);}}/>;
    } else if(props.type === "checkbox") {
        refineBody = <Checkboxes name={props.name} values={props.items} onClick={(active) => {console.log(active);}}/>;
    }

    let toggleBlock = (e) => {
        e.target.parentElement.classList.toggle(s.hidden);
        refineBody = e.target.nextSibling;
        if (refineBody.style.height === "0px") {
            refineBody.style.height = `${ refineBody.scrollHeight }px`
        } else {
            refineBody.style.height = `${ refineBody.scrollHeight }px`;
            window.getComputedStyle(refineBody, null).getPropertyValue("height");
            refineBody.style.height = "0";
        }
    }

    return (
        <div className={s.customRefine}>
            <div className={s.refineTitle} onClick={toggleBlock}>{props.title}</div>
            <div className={s.refineBody}>
                {refineBody}
            </div>
        </div>
    )
}

export default CustomRefine;