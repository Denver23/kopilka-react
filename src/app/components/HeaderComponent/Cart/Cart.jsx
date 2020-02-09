import React, {useState} from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import s from './Cart.module.scss';
import CartDisplay from "./CartDisplay/CartDisplay";

const Cart = () => {

    let [cartDisplay, changeDisplay] = useState(false);

    return (
        <div className={s.cartWrapper}>
            <div className={s.cartItem} onClick={() => {changeDisplay(!cartDisplay)}}>
                <ShoppingCartIcon />
                <span className={s.title}>Cart</span>
                <div className={s.productNumber}>0</div>
            </div>
            {cartDisplay ? <CartDisplay /> : ''}
        </div>
    )
}

export default Cart