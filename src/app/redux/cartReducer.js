import {productAPI} from "../api/api";

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';

let initialState = {
    products: []
}
let initialState2 = {
    products: [
        {
            "id": 1,
            "brand": 'Apple',
            "productTitle": 'iPhone 11 XS Max',
            'sku': 'i-11-64-bl-gl',
            'price': 600,
            'avaibility': true,
            'options': {
                'Memory': '64 Gb',
                'Color': 'Black',
                'Style': 'Gloss'
            },
            'thumbnail': 'https://hotline.ua/img/tx/207/2070816675.jpg',
        }
    ]
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                'products': [...action.data]
            }
        case ADD_PRODUCT:
            return {
                ...state,
                'products': [...state.products, action.data]
            }
        default:
            return state;
    }
}

export const addProduct = (data) => ({type: ADD_PRODUCT,data});

export const setProducts = (data) => ({type: SET_PRODUCTS,data});

export const addToCart = (brand, id, sku) => async (dispatch) => {
    let response = await productAPI.addToCart(brand, id, sku);

    if(response.resultCode == 1) {
        dispatch(addProduct(response.data))
    }
}

export const initializeProducts = (products) => async (dispatch) => {
    let response = await productAPI.initializeProducts(products);

    if(response.data) {
        dispatch(setProducts(response.data));
    }

}

export default cartReducer;