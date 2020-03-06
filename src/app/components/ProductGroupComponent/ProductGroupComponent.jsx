import React, {useEffect} from 'react';
import Slider from './Slider/Slider';
import Refines from './Refines/Refines';
import ProductList from './ProductList/ProductList';
import PagesButtonList from './PagesButtonList/PagesButtonList';
import BestSellers from './BestSellers/BestSellers';
import Reviews from './Reviews/Reviews';
import s from './ProductGroupComponent.module.scss';
import Preloader from "../common/Preloader/Preloader";
import PageNotFoundComponent from "../PageNotFoundComponent/PageNotFoundComponent";

const ProductGroupComponent = (props) => {

    return (
        <div className={s.CategoryComponent}>
            <Slider/>
            <div className={s.productsGrid}>
            <Refines/>
            <ProductList/>
            </div>
            <PagesButtonList categoryUrl='cell-phones'/>
            <BestSellers/>
            <Reviews/>
        </div>
    )
}

const ProductGroupComponentWrapper = ({loading, id, ...props}) => {

    useEffect(() => {
        let type = props.match.params.brand ? 'brand' : 'category';
        let url;
        if(props.match.params.category !== undefined) {
            url = props.match.params.category
        } else if(props.match.params.brand !== undefined) {
            url = props.match.params.brand;
        } else {
            url = 'home';
        }
        props.loadCategory(type, url);
    },[props.match.url])

    return <div className={s.productGroupWrapper}>
        {!loading ? (id !== null ? <ProductGroupComponent props={props}/> : <PageNotFoundComponent />) : (<Preloader background={'true'}/>)}
    </div>
}

export default ProductGroupComponentWrapper;