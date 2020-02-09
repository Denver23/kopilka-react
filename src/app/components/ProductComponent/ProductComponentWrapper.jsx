import React, {useEffect} from "react";
import s from "./ProductComponent.module.scss";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {connect} from "react-redux";
import {loadProduct} from "../../redux/productReducer";
import {withRouter} from "react-router-dom";
import ProductComponentRouter from "./ProductComponent";

const ProductComponentWrapper = ({loading, ...props}) => {

    useEffect(() => {
        let id = props.match.params.id;
        props.loadProduct(id);
    }, [props.match.url])

    return <div className={s.productWrapper}>
        {!loading ? (<ProductComponentRouter props={props}/>) : (<Preloader background={'true'}/>)}
    </div>
}

let mapStateToProps = (state) => {
    return {
        "loading": state.productReducer.loading,
    }
}

export default compose(withRouter, connect(mapStateToProps, {loadProduct}))(ProductComponentWrapper);