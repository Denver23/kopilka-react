import React, {useEffect} from "react";
import s from './CartDisplay.module.scss'
import CartProduct from "./CartProduct/CartProduct";
import {connect} from "react-redux";
import {initializeProducts} from "../../../../redux/cartReducer";

const CartDisplay = (props) => {

    useEffect(() => {
        let loadProducts = JSON.parse(localStorage.getItem('cartProducts'));

        if(loadProducts !== null) {
            props.initializeProducts(loadProducts);
        }
    }, [localStorage.getItem('cartProducts')])

    return <div className={s.cartDisplay}>
        {props.products.length ? props.products.map(product => {
            return <CartProduct {...product} />
            }) : <span className={s.message}>Your cart is empty</span>}
    </div>
}

let mapStateToProps = (state) => {
    return {
        products: state.cartReducer.products
    }
}

export default connect(mapStateToProps, {initializeProducts})(CartDisplay);