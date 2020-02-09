import React from "react";
import s from './SignInForm.module.scss';
import {Field, reduxForm} from "redux-form";
import Checkbox from "../../../common/Checkboxes/Checkbox/Checkbox";
import {Link} from "react-router-dom";
import {minLength, requiredField} from "../../../../utils/validators/validators";
import {connect} from "react-redux";
import Preloader from "../../../common/Preloader/Preloader";

const SignInForm = (props) => {
    return <form className={s.signInForm} onSubmit={props.handleSubmit}>
        <Field placeholder={'Login'} component={inputLogin} type={'text'} name={'login'} validate={[requiredField, minLength]}/>
        <Field placeholder={'Password'} component={inputLogin} type={'password'} name={'password'} validate={[requiredField, minLength]}/>
        <Field component={Checkbox} field={{placeholder: 'Remember Me'}} name={'rememberMe'} type={'checkbox'}/>
        {props.error && <div className={s.errorMessage}>{props.error}</div>}
        <button type={'submit'} className={s.submitFormButton}>Submit</button>
        <Link to={'/registration'} className={s.loginFormLink}>Registration</Link>
    </form>
}

const inputLogin = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return <div className={s.inputContainer}>
        <input {...input} {...props}  className={s.inputLogin + " " + (hasError ? s.errorInput : "")}/>
        {hasError && <div className={s.errorMessage}>{error}</div>}
    </div>
}

const SignInFormRedux = reduxForm({
    form: 'loginForm'
})(SignInForm);

const SignInPreloader = ({onSubmit, isFetching, ...props}) => {
    return <div className={s.signInFormWrapper}>
        {!isFetching ? (<SignInFormRedux onSubmit={onSubmit} />) : (<div style={{position: 'relative'}}><SignInFormRedux onSubmit={onSubmit} /><Preloader/></div>)}
    </div>
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.authReducer.isFetching
    }
}

export default connect(mapStateToProps,{})(SignInPreloader);