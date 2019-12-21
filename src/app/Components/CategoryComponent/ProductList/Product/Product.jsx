import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Product.module.scss';

const Product = (props) => {
    return (
        <NavLink to={`/id${props.data.id}`} className={s.product}>
            <div className={s.productImage}><img
                src={props.data.imageUrl}
                alt=""/></div>
            <span className={s.productTitle}>{props.data.title}</span>
            <span className={s.productAdditionalText}>{props.data.additional}</span>
            <span className={s.price}>${props.data.price}</span>
        </NavLink>
    )
}

export default Product;