import './App.css';
import React from 'react';
import {Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Navbar} from "./components/Navbar/Navbar";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


export const App = () => {
    return (
        <div className="app">
            <HeaderContainer/> {/*заголовок*/}
            <Navbar/> {/*панель навигации*/}
            <div className='app-content'>
                <Route /*exact*/
                    path={'/dialogs'}
                    render={() => <DialogsContainer
                        //страница с диалогом
                        /*store={props.store}*/
                        /* dialogsData={props.state.dialogsPage}
                         dispatch={props.dispatch}*//>}
                /> {/*exact - означает точь-в-точь*/}
                <Route
                    path={'/profile/:userId?'}
                    render={() => <ProfileContainer  //профиль
                        /*store={props.store}*//>}
                />
                <Route
                    path={'/users'}
                    render={() => <UsersContainer/>}
                />
            </div>
        </div>
    );
}
