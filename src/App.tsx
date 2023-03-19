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
    //addPost: (postMessage: string) => void,
    //changeNewText:(newText:string)=>void
}

export const App: React.FC<AppPropsType> = (props) => {
    // let profilePage = state.profilePage
    // let dialogsData=state.dialogsPage
    // let postData = [
    //     {numberOfLikes: 2, postTitle: 'Hi Friends'},
    //     {numberOfLikes: 33, postTitle: 'Hello World'},
    //     {numberOfLikes: 34, postTitle: 'Peace for everyone'},
    //     {numberOfLikes: 6, postTitle: 'Summer is coming'},
    // ]
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
                            //dialogsData={state.dialogsPage.dialogs}
                            messagesData={state.dialogsPage.messages}
                        />}/> {/*exact - означает точь-в-точь*/}
                <Route
                    path={'/profile'}
                    render={() =>
                        <Profile  //профиль
                            postData={state.profilePage.posts}
                            store={props.store}
                            addPost={props.store.addPost.bind(props.store)}
                            changeNewText={props.store.changeNewText.bind(props.store)}
                        />}/>
            </div>
        </div>
    );
}
