import productGroupReducer from "./productGroupReducer";
import headerReducer from "./headerReducer";
import productReducer from "./productReducer";
import {reducer as formReducer} from 'redux-form';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import appReducer from "./appReducer";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

let reducers = combineReducers({
    productGroupReducer,
    headerReducer,
    productReducer,
    appReducer,
    authReducer,
    cartReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
window.__store__ = store;