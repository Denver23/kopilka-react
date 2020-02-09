import React from "react";
import CategoriesBlock from "./CategoriesBlock/CategoriesBlock";
import CustomRefine from "./CustomRefine/CustomRefine";
import s from './Refines.module.scss';
import {connect} from "react-redux";

const Refines = (props) => {
 return (
    <div className={s.refines}>
        {props.categoriesList ? (<CategoriesBlock categoriesList={props.categoriesList}/>) : ''}
        {
            props.refines.map(ref => {
                return <CustomRefine title={ref.title} type={ref.type} items={ref.items} key={ref.title}/>
            })
        }
    </div>
 )
}

const mapStateToProps = (state) => {
    return {
        refines: state.productGroupReducer.refines,
        categoriesList: state.productGroupReducer.categories
    }
}

export default connect(mapStateToProps)(Refines);