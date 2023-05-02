import './App.css';
import React from 'react';
import {Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Login} from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export const App = () => {
    return (
        <div className="app">
            <HeaderContainer/> {/*заголовок*/}
            <Navbar/> {/*панель навигации*/}
            <div className='app-content'>
                <Route /*exact*/
                    path={'/dialogs'}
                    render={() => <DialogsContainer/>} //страница с диалогом //exact - означает точь-в-точь
                />
                <Route
                    path={'/profile/:userId?'}
                    render={() => <ProfileContainer  //профиль
                    />}
                />
                <Route
                    path={'/users'}
                    render={() => <UsersContainer/>} //страница с Users
                />
                <Route
                    path={'/login'}
                    render={() => <Login/>}/>
            </div>
        </div>
    );
}
