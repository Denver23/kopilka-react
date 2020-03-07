import React, {useEffect} from "react";
import s from './AllBrandsComponent.module.scss'
import Preloader from "../common/Preloader/Preloader";
import {connect} from "react-redux";
import Breadcrumbs from "../ProductComponent/Breadcrumbs/Breadcrumbs";
import PagesButtonList from "../ProductGroupComponent/PagesButtonList/PagesButtonList";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const AllBrandsComponent = ({loading, ...props}) => {

    useEffect(() => {

    },[props.match.url])

    return <div className={s.allBrandsWrapper}>
        {!loading ? <AllBrandsList activePage={props.match.params.page} categoryURL={props.match.params.category} {...props}/> : (<Preloader background={'true'}/>)}
    </div>
}
const AllBrandsList = (props) => {

    let brList = [
        {'url': '/', 'title': 'Home'}
    ];

    return <div className={s.allBrands}>
        <Breadcrumbs list={brList}/>
        <PagesButtonList itemsCount={150} activePage={props.match.params.page} activeURL={'all-brands'} type={'custom'}/>
    </div>
}

let mapStateToProps = (state) => {
    return {
        loading: state.allBrandsReducer.loading,
        quantity: state.allBrandsReducer.quantity
    }
}

export default compose(withRouter, connect(mapStateToProps, {}))(AllBrandsComponent);