import React from "react";
import s from './ProfileComponent.module.scss'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Profile from "./Profile";

const ProfileComponent = (props) => {
    return <div className={s.profileWrapper}>
        {props.isAuth ? <Profile/> : <Redirect to={'/404'}/>}
    </div>
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, {})(ProfileComponent);