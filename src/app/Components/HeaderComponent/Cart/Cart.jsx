import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import s from './Cart.module.scss';

const Cart = () => {
    return (
        <div className={s.cartItem}>
            <ShoppingCartIcon />
            Cart
            <div className={s.productNumber}>0</div>
        </div>
    )
}

export default Cart