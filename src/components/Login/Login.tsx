import React from 'react'
import {connect} from "react-redux";
import style from "./Login.module.css";
import {Redirect} from "react-router-dom";
import {loginTC} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utilts/validators/validators";
import {CreateField, Input} from "../Common/FormsControls/FormsControls";
export type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
type LoginType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {CreateField("Email", "email", [required], Input, {type: 'text'})}
                {/*<Field*/}
                {/*    name={"email"}*/}
                {/*    component={Input}*/}
                {/*    placeholder={"Email"}*/}
                {/*    validate={[required]}*/}
                {/*    type={"text"}/>*/}
            </div>
            <div>
                {CreateField("Password", "password", [required], Input, {type: 'password'})}
                {/*<Field*/}
                {/*    name={"password"}*/}
                {/*    component={Input}*/}
                {/*    placeholder={"Password"}*/}
                {/*    type={"password"}*/}
                {/*    validate={[required]}/>*/}
            </div>
            <div>
                {CreateField("Password", "rememberMe", [], Input, {type: 'checkbox'}, 'remember me')}
                {/*<Field*/}
                {/*    name={"rememberMe"}*/}
                {/*    component={Input}*/}
                {/*    type="checkbox"/>*/}
            </div>
            {error && <div className={style.formError}>{error}</div>}
            <div><button>Login</button></div>
        </form>
    );
};
const LoginFormRedux = reduxForm<FormDataType>({form: 'login'})(LoginForm)
//---------------
const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.loginBox}>
            <h2>Login</h2>
            <LoginFormRedux onSubmit={onSubmit}/>
        </div>
    );
};
type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, {login: loginTC})(Login)