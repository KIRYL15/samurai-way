import './App.css';
import React from 'react';
import {Route} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

/*type AppPropsType = {
    store: StoreType
}*/

export const App/*: React.FC<AppPropsType>*/ = (/*props*/) => {

    return (
        <div className="app">
            <Header/> {/*заголовок*/}
            <Navbar/> {/*панель навигации*/}
            <div className='app-content'>
                <Route /*exact*/
                    path={'/dialogs'}
                    render={() =>
                        <DialogsContainer
                            //страница с диалогом
                            /*store={props.store}*/
                            /* dialogsData={props.state.dialogsPage}
                             dispatch={props.dispatch}*/
                        />}/> {/*exact - означает точь-в-точь*/}
                <Route
                    path={'/profile'}
                    render={() =>
                        <Profile  //профиль
                            /*store={props.store}*/
                        />}/>
            </div>
        </div>
    );
}
