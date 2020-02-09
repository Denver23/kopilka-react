import React from "react";
import RadioButtons from "../../../common/RadioButtons/RadioButtons";
import Checkboxes from "../../../common/Checkboxes/Checkboxes";
import s from './CustomRefine.module.scss';

const CustomRefine = (props) => {
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

    let refineBody;
    if(props.type === "radio") {
        refineBody = <RadioButtons form={props.title.toLowerCase()} fields={props.items} onSubmit={values => alert(JSON.stringify(values))} />;
    } else if(props.type === "checkbox") {
        refineBody = <Checkboxes form={props.title.toLowerCase()} fields={props.items} />;
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