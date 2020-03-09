import React, {useEffect} from "react";
import s from './CheckoutStatus.module.scss'
import {connect} from "react-redux";
import {setCheckOutMessage, toggleCheckoutStatus} from "../../../redux/cartReducer";
import Preloader from "../../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";

const CheckoutStatus = (props) => {

    useEffect(() => {
        return () => {
            props.toggleCheckoutStatus(false);
            props.setCheckOutMessage('');
        };
    });

    return <div className={s.checkoutStatusWrapper}>
        {props.checkoutStatus ? (props.message !== '' ? props.message : (<Preloader background={'true'}/>)) : <Redirect to={'/404'} />}
    </div>
}

let mapStateToProps = (state) => {
    return {
        checkoutStatus: state.cartReducer.checkoutStatus,
        message: state.cartReducer.checkoutMessage
    };
}

export default connect(mapStateToProps,{toggleCheckoutStatus,setCheckOutMessage})(CheckoutStatus);