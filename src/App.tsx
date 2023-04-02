import './App.css';
import React from 'react';
import {Route} from "react-router-dom";
import {ActionsTypes} from "./redux/type";
import {AppStateType} from "./redux/redux-store";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

type AppPropsType = {
    dispatch: (action: ActionsTypes) => void
    state: AppStateType
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className="app">
            <Header/> {/*заголовок*/}
            <Navbar/> {/*панель навигации*/}
            <div className='app-content'>
                <Route /*exact*/
                    path={'/dialogs'}
                    render={() =>
                        <Dialogs //страница с диалогом
                            dialogsData={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />}/> {/*exact - означает точь-в-точь*/}
                <Route
                    path={'/profile'}
                    render={() =>
                        <Profile  //профиль
                            postData={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}/>
            </div>
        </div>
    );
}
