import React from "react";
import s from './CategoriesBlock.module.scss';
import {NavLink} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const CategoriesBlock = () => {

    const openList = (Item) => {
        let refineItem = Item.target.closest('li');
        let activeList = refineItem.closest(`.${s.categoriesList}`).getElementsByClassName(`${s.ptypesList} ${s.active}`)[0];
        let activeArrow = refineItem.closest(`.${s.categoriesList}`).getElementsByClassName(`${s.categoryArrow} ${s.active}`)[0];
        if (refineItem.getElementsByClassName(s.ptypesList)[0] !== activeList && activeList !== undefined) {
            activeList.classList.remove(s.active);
            activeArrow.classList.remove(s.active);
        }
        refineItem.getElementsByClassName(s.ptypesList)[0].classList.toggle(s.active);
        refineItem.getElementsByClassName(s.categoryArrow)[0].classList.toggle(s.active);
    }

    return (
        <ul className={s.categoriesList}>
            <li className={s.categoriesItem}>
                <div className={s.categoryButton} onClick={openList}>
                    <div className={s.categoryTitle}>Top Sales</div>
                    <ArrowForwardIosIcon className={`${s.categoryArrow} ${s.active}`}/></div>
                <ul className={`${s.ptypesList} ${s.active}`}>
                    <li className={s.ptypeItem}><NavLink to='/cell-phones' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cell Phones</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/cameras' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cameras</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/computers' className={s.ptypeLink}
                                                         activeClassName={s.active}>Computers</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='tv-audio' className={s.ptypeLink}
                                                         activeClassName={s.active}>TV, Audio</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='video-games' className={s.ptypeLink}
                                                         activeClassName={s.active}>Video Games</NavLink></li>
                </ul>
            </li>
            <li className={s.categoriesItem}>
                <div className={s.categoryButton} onClick={openList}>
                    <div className={s.categoryTitle}>Brand Focus</div>
                    <ArrowForwardIosIcon className={s.categoryArrow}/></div>
                <ul className={s.ptypesList}>
                    <li className={s.ptypeItem}><NavLink to='/cell-phones' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cell Phones</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/cameras' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cameras</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/computers' className={s.ptypeLink}
                                                         activeClassName={s.active}>Computers</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='tv-audio' className={s.ptypeLink}
                                                         activeClassName={s.active}>TV, Audio</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='video-games' className={s.ptypeLink}
                                                         activeClassName={s.active}>Video Games</NavLink></li>
                </ul>
            </li>
            <li className={s.categoriesItem}>
                <div className={s.categoryButton} onClick={openList}>
                    <div className={s.categoryTitle}>Hi-Tech</div>
                    <ArrowForwardIosIcon className={s.categoryArrow}/></div>
                <ul className={s.ptypesList}>
                    <li className={s.ptypeItem}><NavLink to='/cell-phones' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cell Phones</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/cameras' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cameras</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/computers' className={s.ptypeLink}
                                                         activeClassName={s.active}>Computers</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='tv-audio' className={s.ptypeLink}
                                                         activeClassName={s.active}>TV, Audio</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='video-games' className={s.ptypeLink}
                                                         activeClassName={s.active}>Video Games</NavLink></li>
                </ul>
            </li>
            <li className={s.categoriesItem}>
                <div className={s.categoryButton} onClick={openList}>
                    <div className={s.categoryTitle}>Home</div>
                    <ArrowForwardIosIcon className={s.categoryArrow}/></div>
                <ul className={s.ptypesList}>
                    <li className={s.ptypeItem}><NavLink to='/cell-phones' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cell Phones</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/cameras' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cameras</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/computers' className={s.ptypeLink}
                                                         activeClassName={s.active}>Computers</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='tv-audio' className={s.ptypeLink}
                                                         activeClassName={s.active}>TV, Audio</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='video-games' className={s.ptypeLink}
                                                         activeClassName={s.active}>Video Games</NavLink></li>
                </ul>
            </li>
            <li className={s.categoriesItem}>
                <div className={s.categoryButton} onClick={openList}>
                    <div className={s.categoryTitle}>Sale</div>
                    <ArrowForwardIosIcon className={s.categoryArrow}/></div>
                <ul className={s.ptypesList}>
                    <li className={s.ptypeItem}><NavLink to='/cell-phones' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cell Phones</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/cameras' className={s.ptypeLink}
                                                         activeClassName={s.active}>Cameras</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='/computers' className={s.ptypeLink}
                                                         activeClassName={s.active}>Computers</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='tv-audio' className={s.ptypeLink}
                                                         activeClassName={s.active}>TV, Audio</NavLink></li>
                    <li className={s.ptypeItem}><NavLink to='video-games' className={s.ptypeLink}
                                                         activeClassName={s.active}>Video Games</NavLink></li>
                </ul>
            </li>
        </ul>
    )
}

export default CategoriesBlock;