import './App.css';
import React from 'react';
import {Route} from "react-router-dom";
import {StoreType} from "./redux/state";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

type AppPropsType = {
    store: StoreType,
}

export const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <div className="app">
            <Header/> {/*заголовок*/}
            <Navbar/> {/*панель навигации*/}
            <div className='app-content'>
                <Route /*exact*/
                    path={'/dialogs'}
                    render={() =>
                        <Dialogs //страница с диалогом
                            dialogsData={state.dialogsPage.dialogs}
                            messagesData={state.dialogsPage.messages}
                        />}/> {/*exact - означает точь-в-точь*/}
                <Route
                    path={'/profile'}
                    render={() =>
                        <Profile  //профиль
                            postData={state.profilePage.posts}
                            store={props.store}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />}/>
            </div>
        </div>
    );
}
