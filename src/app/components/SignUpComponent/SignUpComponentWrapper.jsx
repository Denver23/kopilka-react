import React from "react";
import s from './SignUpComponent.module.scss'
import {connect} from "react-redux";
import SignUpComponent from "./SignUpComponent";
import {Redirect} from "react-router-dom";

const SignUpComponentWrapper = (props) => {
    return <div className={s.signUpComponentWrapper}>
        {!props.isAuth ? <SignUpComponent/> : <Redirect to={'/404'}/>}
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, {})(SignUpComponentWrapper);