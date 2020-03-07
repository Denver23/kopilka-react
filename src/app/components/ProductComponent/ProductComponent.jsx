import React, {useState} from "react";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import s from './ProductComponent.module.scss';
import ProductGallery from "./ProductGallery/ProductGallery";
import Options from "./Options/Options";
import {Link, withRouter} from "react-router-dom";
import DetailedInfo from "./DetailedInfo/DetailedInfo";
import RecommendedProducts from "./RecommendedProducts/RecommendedProducts";
import {connect} from "react-redux";
import {compose} from "redux";
import {addToCart} from "../../redux/cartReducer";

const ProductComponent = (props) => {

    let brList = [
        {'url': '/', 'title': 'Home'},
        {'url': '/all-brands/page-1', 'title': 'All Brands'},
        {'url': `/brands/${props.match.params.brand}`, 'title': props.brand}
    ];

    let [currentProduct, changeProduct] = useState(props.parentProducts.length > 1 ? undefined : props.parentProducts.length == 1 ? props.parentProducts[0] : undefined);
    let [activeOptions, changeOptions] = useState(props.parentProducts.length !== 0 ? Object.keys(props.parentProducts[0].options).map(option => {
        return {'name': option, 'key': ''};
    }) : []);

    let dataOption = (options) => {
        let result = activeOptions;
        let keys = Object.keys(options);

        result.forEach(item => {
            keys.indexOf(item.name, 0) !== -1 ? item.key = options[item.name] : item.key = '';
        })

        return result;
    };

    const updateProduct = (options) => {
        changeOptions(dataOption(options));
        let newProduct = props.parentProducts.find(product => {
            return activeOptions.every(option => {
                return option.key === product.options[option.name];
            })
        })

        changeProduct(newProduct);
    };

    return (
        <div className={s.productContainer}>
            <div className={s.ProductComponent}>
                <Breadcrumbs list={brList}/>
                <span className={s.productTitle}>{props.brand}® - {props.productTitle}</span>
                <div className={s.mainInfo}>
                    <ProductGallery/>
                    <div className={s.priceInfo}>
                        <Options onChange={(e)=>{updateProduct(e)}} fields={props.parentProducts}/>
                        <div className={s.productActions}>
                            <button className={currentProduct === undefined || !currentProduct.avaibility ? `${s.addToCartButton} ${s.disabled}` : s.addToCartButton} onClick={() => {
                                props.addToCart(props.brand, props.match.params.id, currentProduct.sku)
                            }} disabled={currentProduct === undefined || !currentProduct.avaibility}>Add to Cart
                            </button>
                            <Link to={`/${props.mainCategory}-category`} className={s.viewSimilar}>View Similar</Link>
                        </div>
                    </div>
                </div>
                <div className={s.detailedInfo}>
                    <DetailedInfo productTitle={props.productTitle} brand={props.brand}/>
                    <RecommendedProducts/>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        "brand": state.productReducer.brand,
        "mainCategory": state.productReducer.mainCategory,
        "productTitle": state.productReducer.productTitle,
        "parentProducts": state.productReducer.parentProducts
    }
}

export default compose(withRouter, connect(mapStateToProps, {addToCart}))(ProductComponent);