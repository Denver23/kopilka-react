import React, {useState} from "react";
import s from './CategoriesBlock.module.scss';
import {Link, NavLink} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CategoriesBlock = (props) => {

    let [ptypesList, changeList] = useState(props.categoriesList.filter(category => {
        return category.hasPtypes
    }));
    let [activeList, changeActiveList] = useState();

    const toggleActiveList = (e) => {
        if (e === activeList) {
            changeActiveList('')
        } else {
            changeActiveList(e);
        }
    }

    return (
        <ul className={s.categoriesList}>
            {props.categoriesList.map((category) => {
                return (
                    <li className={s.categoriesItem} key={category.categoryTitle}>
                        {category.hasPtypes ? (
                            <div className={s.categoryButton} onClick={() => toggleActiveList(category.categoryTitle)}>
                                <div className={s.categoryTitle}>{category.categoryTitle}</div>
                                <ArrowForwardIosIcon
                                    className={`${s.categoryArrow} ` + (category.categoryTitle === activeList ? (s.active) : '')}/>
                            </div>) : (<Link to={`/${category.url}-category`}
                                             className={s.categoryTitle}>{category.categoryTitle}</Link>)}
                        {category.hasPtypes ? (
                            <ul className={`${s.ptypesList} ` + (category.categoryTitle === activeList ? (s.active) : '')}>
                                {category.ptypesList.map((ptype) => {
                                    return <li className={s.ptypeItem} key={ptype.ptypeTitle}><NavLink to={`/${ptype.url}-category`}
                                                                                className={s.ptypeLink}
                                                                                activeClassName={s.active}>{ptype.ptypeTitle}</NavLink>
                                    </li>
                                })}
                            </ul>
                        ) : ''}
                    </li>
                )
            })}
        </ul>
    )
}

export default CategoriesBlock;