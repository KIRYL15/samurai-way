import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import style from "./Login.module.css";

type FormDataType = {
    login:string,
    password:string,
    rememberMe:boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} component={"input"} placeholder={"Login"}/>
                {/*<input placeholder={"Login"}/>*/}
            </div>
            <div>
                <Field name={"password"} component={"input"} placeholder={"Password"}/>
                {/*<input placeholder={"Password"}/>*/}
            </div>
            <div>
                <Field name={"remember"} component={"input"} type={"checkbox"} />remember me
                {/*<input type={'checkbox'}/>*/}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginFormRedux = reduxForm<FormDataType>({form: "login"})(LoginForm)
export const Login = () => {
    const onSubmit=(formData:FormDataType)=>{
    }
    return (
        <div className={style.loginBox}>
            <h2>LOGIN</h2>
            <LoginFormRedux onSubmit={onSubmit} />
        </div>
    );
};

