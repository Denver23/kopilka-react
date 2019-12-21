import React from 'react';
import Slider from './Slider/Slider';
import Refines from './Refines/Refines';
import ProductList from './ProductList/ProductList';
import PagesButtonList from './PagesButtonList/PagesButtonList';
import BestSellers from './BestSellers/BestSellers';
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
            <BestSellers />
        </div>
    )
}

export default CategoryComponent;