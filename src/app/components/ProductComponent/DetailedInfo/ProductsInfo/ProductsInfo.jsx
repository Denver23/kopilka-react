import React, {useLayoutEffect, useState} from "react";
import s from './ProductsInfo.module.scss';
import {Link, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";

const ProductsInfo = (props) => {

    let skuRow = React.createRef();
    let [skuAllHeight, changeSKUAllHeight] = useState(skuRow.current ? skuRow.current.scrollHeight : 0);
    let [skuHeight, changeSKUHeight] = useState();
    let [activeSKUList, changeSKUListStatus] = useState(false);

    useLayoutEffect(() => {
        changeSKUAllHeight(skuRow.current.scrollHeight);
        changeSKUHeight(skuRow.current.clientHeight)
    }, [skuAllHeight])

    return <div className={s.ProductsInfo}>
        <div className={s.infoRow}>
            <div className={s.infoTitle}>Brand:</div>
            <div className={s.infoContent}><Link to={`/brands/${props.match.params.brand}`}>{props.brand}</Link></div>
        </div>
        <div className={s.infoRow}>
            <div className={s.infoTitle}>Part Number:</div>
            <div className={activeSKUList ? `${s.infoContent} ${s.active}` : s.infoContent} ref={skuRow}>
                {props.parentProducts.map(product => {
                    return <div className={s.productSKU} key={product.sku}>{product.sku}</div>
                })}
                {skuAllHeight > skuHeight ? <span className={s.skuArrow} onClick={() => {changeSKUListStatus(!activeSKUList)}}>&#8744;</span> : ''}
            </div>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        "parentProducts": state.productReducer.parentProducts
    }
}

export default compose(withRouter, connect(mapStateToProps, {}))(ProductsInfo);