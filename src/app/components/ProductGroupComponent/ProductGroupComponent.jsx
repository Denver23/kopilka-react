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
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const ProductGroup = (props) => {

    return (
        <div className={s.CategoryComponent}>
            <Slider/>
            <div className={s.productsGrid}>
            <Refines/>
            <ProductList/>
            </div>
            <PagesButtonList itemsCount={props.productCount} activePage={props.activePage} activeURL={props.activeURL} type={props.type}/>
            <BestSellers/>
            <Reviews/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        productCount: state.productGroupReducer.productCount
    }
}

const ProductGroupComponent = connect(mapStateToProps, {})(ProductGroup);

const ProductGroupComponentWrapper = ({loading, id, ...props}) => {

    let type = props.match.params.brand !== undefined ? 'brand' : 'category';

    useEffect(() => {
        let type = props.match.params.brand ? 'brand' : 'category';
        let page = props.match.params.page;
        let url;
        if(props.match.params[type] !== undefined && page === undefined) return;
        if(props.match.params.category !== undefined) {
            url = props.match.params.category
        } else if(props.match.params.brand !== undefined) {
            url = props.match.params.brand;
        } else {
            url = 'home';
        }
        props.loadCategory(type, url);
    },[props.match.url])

    let itemName = props.match.params.brand ? props.match.params.brand : props.match.params.category;
    let itemType = props.match.params.brand ? 'brand' : 'category';

    return <div className={s.productGroupWrapper}>
        {
            itemName === undefined ? (!loading ? (id !== null ? <ProductGroupComponent type={type} activePage={props.match.params.page} categoryURL={props.match.params.category} {...props}/> : <PageNotFoundComponent />) : (<Preloader background={'true'}/>)) :
                (props.match.params.page !== undefined ?
                    (!loading ? (id !== null ? <ProductGroupComponent type={type} activePage={props.match.params.page} activeURL={props.match.params.brand ? props.match.params.brand : props.match.params.category} {...props}/> : <PageNotFoundComponent />) : (<Preloader background={'true'}/>)) :
                    (itemType === 'brand' ? <Redirect to={`/brands/${itemName}/page-1`}/> : <Redirect to={`/${itemName}-category/page-1`}/>))
        }
    </div>
}

export default ProductGroupComponentWrapper;