import React from 'react';
import {NavLink} from "react-router-dom";
import s from './PagesButtonList.module.scss';
import {connect} from "react-redux";

const PagesButtonList = (props) => {
    let pagesCount = Math.ceil(props.productCount / 12);
    let pagesJsx = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagesJsx.push(<NavLink to={`/${props.categoryUrl}/page-${i}`} className={s.pageNumber} activeClassName={s.pageNumberActive} key={`page-${i}`}>{i}</NavLink>)
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

const mapStateToProps = (state) => {
    return {
        productCount: state.productGroupReducer.productCount
    }
}

export default connect(mapStateToProps)(PagesButtonList);