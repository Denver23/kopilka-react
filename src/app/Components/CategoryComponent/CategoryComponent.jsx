import React from 'react';
import CategoriesMenu from './CategoriesMenu/CategoriesMenu';
import s from './CategoryComponent.module.scss';

const CategoryComponent = () => {
    return (
        <div className={s.CategoryComponent}>
            <div className={s.wrapper}>
            <CategoriesMenu />
            </div>

        </div>
    )
}

export default CategoryComponent;