import React from 'react';
import Product from "./Product/Product";
import s from './ProductList.module.scss';
import {connect} from "react-redux";

const ProductList = (props) => {
    return (
        <div className={s.productList}>
            {props.products.map((prod) => {
                return <Product data={prod} key={`${prod.brand} ${prod.title}`}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.productGroupReducer.products
    }
}

export default connect(mapStateToProps)(ProductList);