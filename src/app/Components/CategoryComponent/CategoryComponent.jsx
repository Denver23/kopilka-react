import React from 'react';
import Slider from './Slider/Slider';
import Refines from './Refines/Refines';
import ProductList from './ProductList/ProductList';
import PagesButtonList from './PagesButtonList/PagesButtonList';
import s from './CategoryComponent.module.scss';

const CategoryComponent = () => {
    return (
        <div className={s.CategoryComponent}>
            <Slider />
            <div className={s.productsGrid}>
            <Refines />
            <ProductList />
            </div>
            <PagesButtonList categoryUrl='cell-phones' prCount='85'/>
        </div>
    )
}

export default CategoryComponent;