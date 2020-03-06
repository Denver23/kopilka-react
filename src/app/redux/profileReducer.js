import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE';


let initialState = {
    editMode: false,
    name: null,
    surname: null,
    login: null,
    email: null,
    phone: null,
    numberOfPurchases: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            let resultData = action.data.numberOfPurchases === null ? {name: action.data.name,surname: action.data.surname,login: action.data.login,email: action.data.email,phone: action.data.phone} : action.data
            return {
                ...state,
                ...resultData
            }
        case CHANGE_EDIT_MODE:
            return {
                ...state,
                editMode: action.value
            }
        default:
            return state;
    }
}

export const setProfile = (name, surname, login, email, phone, numberOfPurchases = null) => ({type: SET_PROFILE_DATA, data: {name, surname, login, email, phone, numberOfPurchases}});

export const changeEditMode = (value) => ({type: CHANGE_EDIT_MODE, value});

export const loadProfile = (id) => async(dispatch) => {
    let response = await authAPI.loadProfile(id);

    if(response.resultCode === 1) {
        dispatch(setProfile(response.data.name,response.data.surname,response.data.login,response.data.email,response.data.phone,response.data.numberOfPurchases));
    }
}

export const changeProfile = (data) => async(dispatch) => {
    let response = await authAPI.changeProfile(data);
    console.log(data);

    if(response.resultCode === 1) {
        dispatch(setProfile(data.name, data.surname, data.login, data.email, data.phone))
        dispatch(changeEditMode(false))
    } else {
        dispatch(stopSubmit("profileForm", {_error: 'Cant update your profile.'}));
    }
}


export default profileReducer;