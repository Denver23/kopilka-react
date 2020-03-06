import {prGroupAPI} from "../api/api";

const SET_CATEGORY = 'SET_CATEGORY';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

let initialState = {
    "id": '',
    "productCount": '',
    "products": [],
    "refines": [],
    'categories': [],
    "reviews": [],
    "bestSellers": [],
    'slides': [],
    'loading': false
}

const productGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                'id': action.data.id,
                'productCount': action.data.productCount,
                'products': action.data.products,
                'refines': action.data.refines,
                'categories': action.data.categories,
                'reviews': action.data.reviews,
                'bestSellers': action.data.bestSellers,
                'slides': action.data.slides
            };
        case TOGGLE_LOADING:
            return {...state, 'loading': action.loading};
        default:
            return state;
    }
}

export const setCategory = (data) => ({type: SET_CATEGORY,data});
export const toggleLoading = (loading) => ({type: TOGGLE_LOADING,loading});

export const loadCategory = (type, url) => async (dispatch) => {
    dispatch(toggleLoading(true));
    let response = await prGroupAPI.loadPrGroup(type, url);

    if(response.resultCode === 1) {
        dispatch(setCategory(response.data));
    } else(
        dispatch(setCategory({
            "id": null,
            "productCount": '',
            "products": [],
            "refines": [],
            'categories': [],
            "reviews": [],
            "bestSellers": [],
            'slides': []
        }))
    )
    dispatch(toggleLoading(false));
}

export default productGroupReducer;