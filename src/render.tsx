import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, AppStateType, changeNewText} from './redux/state'



export let rerenderEntireTree=(state:AppStateType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                changeNewText={changeNewText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
