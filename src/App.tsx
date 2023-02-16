import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

export function App() {
    let data = [
        {id: 1, name: 'Lui'},
        {id: 2, name: 'Endi'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Monika'},
    ]
    return (
        <div className="app">
            <Header/> {/*заголовок*/}
            <Navbar/> {/*панель навигации*/}
            <div className='app-content'>
                <Route /*exact*/ path={'/dialogs'} component={Dialogs}/> {/*exact - означает точь в точь*/}
                <Route path={'/profile'} component={Profile}/>
                {/*<Dialogs/> */}{/*страница с диалогом*/}
                {/*<Profile/>*/} {/*профиль*/}
            </div>
        </div>
    );
}
