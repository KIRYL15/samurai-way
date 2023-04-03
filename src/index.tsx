import React from 'react';
import {App} from "./App";
import ReactDOM from 'react-dom';
import {AppStateType} from "./redux/type";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state: AppStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
