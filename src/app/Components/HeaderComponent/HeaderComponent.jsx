import React from 'react';
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import TopMenu from "./TopMenu/TopMenu";
import Cart from "./Cart/Cart";
import SignIn from "./SignIn/SignIn";
import s from './HeaderComponent.module.scss';

const HeaderComponent = () => {
    return (
        <div className={s.headerDecorator}>
            <div className={s.headerComponent}>
                <BurgerMenu></BurgerMenu>
                <a href="" className={s.logoUrl}>Portland</a>
                <TopMenu/>
                <Cart/>
                <SignIn/>
            </div>
        </div>
    )
}

export default HeaderComponent;