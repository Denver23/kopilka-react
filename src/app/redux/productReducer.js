import {productAPI} from "../api/api";

const TOGGLE_LOADING = 'TOGGLE_LOADING';
const SET_PRODUCT = 'SET_PRODUCT';

let initialState = {
    "loading": false,
    "id": '',
    "brand": '',
    "mainCategory": '',
    "productTitle": '',
    "parentProducts": [],
    "images": [],
    "productBrandImage": '',
    "shortDescription": '',
    "specifications": '',
    "features": '',
    "recommendedProducts": []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                "id": action.data.id,
                "brand": action.data.brand,
                "mainCategory": action.data.mainCategory,
                "productTitle": action.data.productTitle,
                "parentProducts": action.data.parentProducts,
                "images": action.data.images,
                "productBrandImage": action.data.productBrandImage,
                "shortDescription": action.data.shortDescription,
                "specifications": action.data.specifications,
                "features": action.data.features,
                "recommendedProducts": action.data.recommendedProducts
            };
        case TOGGLE_LOADING:
            return {...state, 'loading': action.loading};
        default:
            return state;
    }
}

export const toggleLoading = (loading) => ({type: TOGGLE_LOADING,loading});

export const setProduct = (data) => ({type: SET_PRODUCT, data});

export const loadProduct = (id, brand) => async (dispatch) => {
    dispatch(toggleLoading(true));
    let response = await productAPI.loadProduct(id, brand);

    if(response.resultCode === 1) {
        dispatch(setProduct(response.data));
    } else {
        dispatch(setProduct({
            "id": null,
            "brand": '',
            "mainCategory": '',
            "productTitle": '',
            "parentProducts": [],
            "images": [],
            "productBrandImage": '',
            "shortDescription": '',
            "specifications": '',
            "features": '',
            "recommendedProducts": []
        }));
    }
    dispatch(toggleLoading(false));
}

export default productReducer;