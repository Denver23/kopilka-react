import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.resultCode === 1) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    } else if(response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const login = (login, password, rememberMe) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await authAPI.login(login, password, rememberMe);

    if (response.resultCode === 1) {
        let {id, login, email} = response.data;

        dispatch(toggleIsFetching(false));
        dispatch(setAuthUserData(id, email, login, true));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(toggleIsFetching(false));
        dispatch(stopSubmit("loginForm", {_error: message}));
    }
}

export const signUp = (data) => async (dispatch) => {
    let response = await authAPI.signUp(data);

    if(response.resultCode === 1) {
        dispatch(setAuthUserData(1, data.email, data.login, true));
    } else if(response.resultCode === 0) {
        dispatch(stopSubmit("signUpForm", {_error: response.data.message}));
    }
}

export const signOut = () => (dispatch) => {
    authAPI.signOut();
    dispatch(setAuthUserData(null, null, null, false));
}

export const toggleIsFetching =(isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default authReducer;