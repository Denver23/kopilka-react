import React from "react";
import s from './SignUpComponent.module.scss'
import Breadcrumbs from "../ProductComponent/Breadcrumbs/Breadcrumbs";
import {Field, reduxForm} from "redux-form";
import Input from "../common/Input/Input";
import {emailType, minLength, requiredField} from "../../utils/validators/validators";
import RadioButton from "../common/RadioButtons/RadioButton/RadioButton";
import {connect} from "react-redux";
import {signUp} from "../../redux/authReducer";

const SignUpComponent = (props) => {

    let brList = [
        {'url': '/', 'title': 'Home'},
        {'url': '/sign-up/', 'title': 'Sign Up'},
    ];

    const SignUpSubmit = (data) => {
        props.signUp(data);
    }



    return <div className={s.signUpComponent}>
            <Breadcrumbs list={brList}/>
            <span className={s.warning}>If you are already registered, go to the login page.</span>
            <span className={s.signUpTitle}>General Information</span>
            <SignUpFormRedux onSubmit={SignUpSubmit}/>
        </div>
}

const SignUpForm = (props) => {
    return <form className={s.signUpForm} onSubmit={props.handleSubmit}>
        {props.error && <div className={s.errorMessage}>{props.error}</div>}
        <Field placeholder={'Name'} component={Input} type={'text'} name={'name'} validate={[requiredField, minLength]}/>
        <Field placeholder={'Surname'} component={Input} type={'text'} name={'surname'} validate={[requiredField, minLength]}/>
        <Field placeholder={'Login'} component={Input} type={'text'} name={'login'} validate={[requiredField, minLength]}/>
        <Field placeholder={'E-Mail'} component={Input} type={'text'} name={'email'} validate={[requiredField, minLength, emailType]}/>
        <Field placeholder={'Password'} component={Input} type={'password'} name={'password'} validate={[requiredField, minLength]}/>
        <span className={s.subTitle}>Subscribe to our news:</span>
        <Field name={'subscribeToNews'} component={RadioButton} field={{name: 'yes',placeholder: 'Yes'}} props={{'value': 'yes'}} key={'Yes'} validate={[requiredField]} />
        <Field name={'subscribeToNews'} component={RadioButton} field={{name: 'no',placeholder: 'No'}} props={{'value': 'no'}} key={'No'} validate={[requiredField]} />
        <button type={'submit'} className={s.signUpButton}>Sign Up</button>
    </form>
}

const SignUpFormRedux = reduxForm({
    form: 'signUpForm'
})(SignUpForm);

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {signUp})(SignUpComponent);