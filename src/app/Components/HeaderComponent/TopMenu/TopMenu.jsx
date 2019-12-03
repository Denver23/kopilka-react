import React from "react";
import {NavLink} from 'react-router-dom';
import s from './TopMenu.module.scss';

const TopMenu = () => {
    return (
        <ul className={s.topMenuList}>
            <li><NavLink to="#" className={s.topMenuUrl}>Home</NavLink></li>
            <li><NavLink to="#" className={s.topMenuUrl}>Devices</NavLink></li>
            <li><NavLink to="#" className={s.topMenuUrl}>Delivery & Payment</NavLink></li>
            <li><NavLink to="#" className={s.topMenuUrl}>Guarantee</NavLink></li>
            <li><NavLink to="#" className={s.topMenuUrl}>About Us</NavLink></li>
        </ul>
    )
}
export default TopMenu;