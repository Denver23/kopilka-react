import React from 'react';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import TopMenu from "./TopMenu/TopMenu";
import Cart from "./Cart/Cart";
import SignIn from "./SignIn/SignIn";
import s from './HeaderComponent.module.scss';
import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";
import {connect} from "react-redux";
import ProfileLink from "./ProfileLink/ProfileLink";
import {Link} from "react-router-dom";

const HeaderComponent = (props) => {
    return (
        <div className={s.headerDecorator}>
            <div className={s.headerComponent}>
                <BurgerMenu></BurgerMenu>
                <Link to="/" className={s.logoUrl}>Portland</Link>
                <TopMenu/>
                {props.profile.isAuth ? (<div className={s.profileMenu}><Cart/><ProfileLink profile={props.profile} /></div>) : (<div className={s.profileMenu}><Cart/><SignIn/></div>)}
            </div>
            <CategoriesMenu />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.authReducer
    }
}

export default connect(mapStateToProps, {})(HeaderComponent);