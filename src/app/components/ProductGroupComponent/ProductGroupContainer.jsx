import ProductGroupComponentWrapper from './ProductGroupComponent';
import {connect} from "react-redux";
import {loadCategory} from "../../redux/productGroupReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        loading: state.productGroupReducer.loading,
        id: state.productGroupReducer.id
    }
}

const ProductGroupContainer = compose(withRouter, connect(mapStateToProps, {loadCategory}))(ProductGroupComponentWrapper);

export default ProductGroupContainer;