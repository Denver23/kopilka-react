import React, {useState} from 'react';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import MainMenu from "./MainMenu/MainMenu";
import Cart from "./Cart/Cart";
import SignIn from "./SignIn/SignIn";
import s from './HeaderComponent.module.scss';
import CategoriesMenu from "./CategoriesMenu/CategoriesMenu";
import {connect} from "react-redux";
import ProfileLink from "./ProfileLink/ProfileLink";
import {Link} from "react-router-dom";
import BurgerDisplay from "./BurgerMenu/BurgerDisplay/BurgerDisplay";

const HeaderComponent = (props) => {

    let [burgerDisplay, setBurgerDisplay] = useState(false);

    return (
        <div className={s.headerDecorator}>
            <BurgerDisplay mainMenu={props.mainMenu} burgerDisplay={burgerDisplay} setBurgerDisplay={setBurgerDisplay}/>
            <div className={s.headerComponent}>
                <div className={s.burgerLogo}>
                    <BurgerMenu burgerDisplay={burgerDisplay} setBurgerDisplay={setBurgerDisplay}/>
                    <Link to="/" className={s.logoUrl}>Portland</Link>
                </div>
                <MainMenu mainMenu={props.mainMenu}/>
                {props.profile.isAuth ? (<div className={s.profileMenu}><Cart/><ProfileLink profile={props.profile} /></div>) : (<div className={s.profileMenu}><Cart/><SignIn/></div>)}
            </div>
            <CategoriesMenu topMenu={props.topMenu} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.authReducer,
        mainMenu: state.headerReducer.mainMenu,
        topMenu: state.headerReducer.topMenu
    }
}

export default connect(mapStateToProps, {})(HeaderComponent);