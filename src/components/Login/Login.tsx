import {connect} from "react-redux";
import style from "./Login.module.css";
import {loginTC} from "../../redux/auth-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utilts/validators/validators";
import React from 'react'


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
                <Field
                    name={"email"}
                    component={Input}
                    placeholder={"Email"}
                    validate={[required]}
                    type={"text"}/>
            </div>
            <div>
                <Field
                    name={"password"}
                    component={Input}
                    placeholder={"Password"}
                    type={"password"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name={"rememberMe"}
                    component={Input}
                    type="checkbox"
                />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
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