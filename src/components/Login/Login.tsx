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
    captchaUrl: null | string
}
type LoginType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean, captchaUrl:null | string) => void
    captchaUrl: null | string
}
type CaptchaType = {
    captchaUrl: null | string
}
export const LoginForm: React.FC<InjectedFormProps<FormDataType, CaptchaType> & CaptchaType> = ({
                                                                                                    handleSubmit,
                                                                                                    error,
                                                                                                    captchaUrl
                                                                                                }) => {
    return (
        <form onSubmit={handleSubmit}>
            {CreateField("Email", "email", [required], Input, {type: 'text'})}
            {/*<Field*/}
            {/*    name={"email"}*/}
            {/*    component={Input}*/}
            {/*    placeholder={"Email"}*/}
            {/*    validate={[required]}*/}
            {/*    type={"text"}/>*/}
            {CreateField("Password", "password", [required], Input, {type: 'password'})}
            {/*<Field*/}
            {/*    name={"password"}*/}
            {/*    component={Input}*/}
            {/*    placeholder={"Password"}*/}
            {/*    type={"password"}*/}
            {/*    validate={[required]}/>*/}
            {CreateField("Password", "rememberMe", [], Input, {type: 'checkbox'}, 'remember me')}
            {/*<Field*/}
            {/*    name={"rememberMe"}*/}
            {/*    component={Input}*/}
            {/*    type="checkbox"/>*/}
            {captchaUrl && <img alt="captchaUrl" src={captchaUrl}/>}
            {captchaUrl && CreateField("Symbols from image", "captchaUrl", [required], Input, {})}
            {error && <div className={style.formError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
const LoginFormRedux = reduxForm<FormDataType, CaptchaType>({form: 'login'})(LoginForm)
//---------------
const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={style.loginBox}>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
            <h2>Login</h2>
            <LoginFormRedux captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
        </div>
    );
};
type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: null | string
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl

})
export default connect(mapStateToProps, {login: loginTC})(Login)