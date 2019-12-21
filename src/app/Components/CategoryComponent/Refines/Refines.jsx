import React from "react";
import CategoriesBlock from "./CategoriesBlock/CategoriesBlock";
import CustomRefine from "./CustomRefine/CustomRefine";
import s from './Refines.module.scss';

const Refines = () => {
    let refines = {
        "available": {
            "title": "Available",
            "type": "radio",
            "items": ["In Storage", "In Online-Shop"]
        },
        "condition": {
            "title": "Condition",
            "type": "checkbox",
            "items": ["New", "Manufacter Refurbished", "Seller Refurbished", "Used", "For Parts or not Working"]
        },
        "deliveryOptions": {
            "title": "Delivery Options",
            "type": "radio",
            "items": ["FREE", "$4.99"]
        }
    }
 return (
    <div className={s.refines}>
        <CategoriesBlock />
        {
            Object.keys(refines).map(ref => {
                return <CustomRefine title={refines[ref].title} name={ref} type={refines[ref].type} items={refines[ref].items}/>
            })
        }
    </div>
 )
}

export default Refines;