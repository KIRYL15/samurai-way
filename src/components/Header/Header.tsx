import React from 'react';
import logo from "./Logo.png";
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {HeaderContainerPropsType} from "./HeaderContainer";

export const Header: React.FC<HeaderContainerPropsType> = (props) => {
    const {login, isAuth, logout} = props
    return (
        <header className={style.header}>
            <img src={logo} alt="logo"/>
            <div className={style.loginBlock}>
                {
                    isAuth
                        ? <div>{login}-<button onClick={logout}>Log out</button></div>
                        : <NavLink to={'./login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};