import React from 'react';
import s from './CategoriesMenu.module.scss';
import {NavLink} from "react-router-dom";
import Search from "./Search/Search";

const CategoriesMenu = () => {
    return (
        <div className={s.topLine}>
            <div className={s.generalMenuList}>
                <ul className={s.categoriesList}>
                    <li className={s.categoryItem}><NavLink to='/top-sales' className={s.linkUrl} activeClassName={s.active}>Top Sales</NavLink></li>
                    <li className={s.categoryItem}><NavLink to='/brand-focus' className={s.linkUrl} activeClassName={s.active}>Brand Focus</NavLink></li>
                    <li className={s.categoryItem}><NavLink to='/hi-tech' className={s.linkUrl} activeClassName={s.active}>Hi-Tech</NavLink></li>
                    <li className={s.categoryItem}><NavLink to='/best-sellers' className={s.linkUrl} activeClassName={s.active}>Best Sellers</NavLink></li>
                    <li className={s.categoryItem}><NavLink to='/projects' className={s.linkUrl} activeClassName={s.active}>Projects</NavLink></li>
                </ul>
                <NavLink to='/support' className={s.linkUrl} activeClassName={s.active}>Support</NavLink>
            </div>
            <Search />
        </div>
    )
}

export default CategoriesMenu;