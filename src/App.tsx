import './App.css';
import React from 'react';
import {ActionsTypes} from "./redux/type";
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {AppStateType} from "./redux/redux-store";

type AppPropsType = {

    dispatch: (action: ActionsTypes) => void
    state: AppStateType
}

export const App: React.FC<AppPropsType> = (props) => {
    //debugger
    //const state = props.store.getState()
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
                            postData={props.state.profilePage.posts}

                            dispatch={props.dispatch}
                        />}/>
            </div>
        </div>
    );
}
