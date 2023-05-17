import './App.css';
import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";

export const App = () => {
    return (
        <div className="app">
            <HeaderContainer/> {/*заголовок*/}
            <Navbar/> {/*панель навигации*/}
            <div className='app-content'>
                <Route exact path={"/"}>
                    <Redirect to={"/ProfileContainer"}/>
                </Route>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/> {/*//страница с диалогом //exact - означает точь-в-точь*/}
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>  {/*//профиль*/}
                <Route path={'/users'} render={() => <UsersContainer/>}/> {/*//страница с Users*/}
                <Route path={'/login'} render={() => <Login />}/>
            </div>
        </div>
    );
}
