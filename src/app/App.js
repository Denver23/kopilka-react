import React, {Component} from 'react';
import HeaderComponent from "./components/HeaderComponent/HeaderComponent.jsx";
import ProductGroupContainer from "./components/ProductGroupComponent/ProductGroupContainer.jsx";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import s from './App.module.scss';
import {Route, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import ProductComponentWrapper from "./components/ProductComponent/ProductComponentWrapper";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return <div className={s.appGrid}>
            <HeaderComponent/>
            <Route exact path='/' component={ProductGroupContainer}/>
            <Route exact path='/:category(\w[-\w]{0,25}\w)-category' component={ProductGroupContainer}/>
            <Route exact path='/brands/:brand(\w[-\w]{0,25}\w)' component={ProductGroupContainer}/>
            <Route exact path='/brands/:brand(\w[-\w]{0,25}\w)/id:id(\d+)' component={ProductComponentWrapper}/>
            <FooterComponent/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appReducer.initialized
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
