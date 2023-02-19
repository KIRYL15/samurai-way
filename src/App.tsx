import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {AppStateType} from "./redux/state";

type AppPropsType = {
    state: AppStateType,
    addPost: (postMessage: string) => void,
    changeNewText:(newText:string)=>void


}

export function App(props: AppPropsType) {
    // let profilePage = state.profilePage
    // let dialogsData=state.dialogsPage
    // let postData = [
    //     {numberOfLikes: 2, postTitle: 'Hi Friends'},
    //     {numberOfLikes: 33, postTitle: 'Hello World'},
    //     {numberOfLikes: 34, postTitle: 'Peace for everyone'},
    //     {numberOfLikes: 6, postTitle: 'Summer is coming'},
    // ]
    return (
        <div className="app">
            <Header/> {/*заголовок*/}
            <Navbar/> {/*панель навигации*/}
            <div className='app-content'>
                <Route /*exact*/
                    path={'/dialogs'}
                    render={() => <Dialogs
                        dialogsData={props.state.dialogsPage.dialogs}
                        //dialogsData={state.dialogsPage.dialogs}
                        messagesData={props.state.dialogsPage.messages}

                    />}/> {/*exact - означает точь-в-точь*/}
                <Route
                    path={'/profile'}
                    render={() => <Profile
                        postData={props.state.profilePage.posts}
                        addPost={props.addPost}
                        //changeNewText={props.changeNewText}
                    />}/>
                {/*<Dialogs/> */}{/*страница с диалогом*/}
                {/*<Profile/>*/} {/*профиль*/}
            </div>
        </div>
    );
}
