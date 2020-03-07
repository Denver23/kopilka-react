import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import s from './PagesButtonList.module.scss';
import {connect} from "react-redux";

const PagesButtonList = ({portionSize = 12,...props}) => {

    let type = props.type;
    let activeURL = props.activeURL === undefined ? '' : props.activeURL;
    let activePage = props.activePage === undefined ? 1 : props.activePage;
    let pagesCount = Math.ceil(props.itemsCount / 12);
    let step = 3;
    let url = type === 'category' ? (activeURL !== '' ? `/${activeURL}-category/page-` : `page-`) :
    type === 'brand' ? `/brands/${activeURL}/page-` : `/${activeURL}/page-`;

    let pagesArray = [];

    if(activePage < +step + 2) {
        let lastPage = pagesCount - 1 - (step*2+1) > 0 ? (step*2+1) : (pagesCount - 1);
        for(let i = 2; i <= lastPage; i++) {
            pagesArray.push(i);
        }
    } else if(activePage >= +step + 2 && +activePage + step < pagesCount) {
        for(let i = activePage - step; i <= +activePage + step; i++) {
            pagesArray.push(i);
        }
    } else if(+activePage + step >= pagesCount) {
        for(let i = (step*2+1); i > 0; i--) {
            pagesArray.push(pagesCount - i);
        }
    }


    return (
        <div className={s.pagesListWrapper}>
            <div className={s.pagesList}>
                {+activePage !== 1 ? <NavLink to={`${url}${activePage - 1}`} className={`${s.pagesArrows} ${s.leftArrow}`}>&#60;</NavLink> : ''}
                <div className={s.numbers}>
                    <NavLink to={`${url}${1}`} className={props.activePage === undefined ? `${s.pageNumber} ${s.pageNumberActive}` : s.pageNumber} activeClassName={s.pageNumberActive} key={`page-${1}`}>{1}</NavLink>
                    {pagesArray[0] - 1 !== 1 ? <div className={s.paginationDots}>...</div> : ''}
                    {
                        pagesArray.map(page => {
                            return <NavLink to={`${url}${page}`} className={s.pageNumber} activeClassName={s.pageNumberActive} key={`page-${page}`}>{page}</NavLink>
                        })
                    }
                    {pagesArray[pagesArray.length - 1] + 1 !== pagesCount ? <div className={s.paginationDots}>...</div> : ''}
                    <NavLink to={`${url}${pagesCount}`} className={s.pageNumber} activeClassName={s.pageNumberActive} key={`page-${pagesCount}`}>{pagesCount}</NavLink>
                </div>
                {+activePage !== pagesCount ? <NavLink to={`${url}${+activePage + 1}`} className={`${s.pagesArrows} ${s.rightArrow}`}>&#62;</NavLink> : ''}
            </div>
        </div>
    )
}

export default PagesButtonList;