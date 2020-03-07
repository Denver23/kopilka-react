const SET_LOADING = 'SET_LOADING';

let initialState = {
    loading: false,
    quantity: null,
    brands: []
}

const allBrandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.value
            }
        default:
            return state;
    }
}

export const setLoading = (value) => ({type: SET_LOADING, value});

export default allBrandsReducer;