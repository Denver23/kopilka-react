import React from 'react';
import {NavLink} from "react-router-dom";
import s from './PagesButtonList.module.scss';

const PagesButtonList = (props) => {
    let pagesCount = Math.ceil(props.prCount / 12);
    let pagesJsx = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesJsx.push(<NavLink to={`/${props.categoryUrl}/page-${i}`} className={s.pageNumber} activeClassName={s.pageNumberActive}>{i}</NavLink>)
    }
    return (
        <div className={s.pagesListWrapper}>
            <div className={s.pagesList}>
                <NavLink to={`/${props.categoryUrl}/page-`} className={s.pagesArrows}>&#60;</NavLink>
                <div className={s.numbers}>{pagesJsx}</div>
                <NavLink to={`/${props.categoryUrl}/page-`} className={s.pagesArrows}>&#62;</NavLink>
            </div>
        </div>
    )
}

export default PagesButtonList;