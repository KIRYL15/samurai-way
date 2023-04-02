import React from 'react';
import {App} from "./App";
import ReactDOM from 'react-dom';
import {AppStateType} from "./redux/type";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";

let rerenderEntireTree = (state: AppStateType) => {
    //debugger
    ReactDOM.render(
        <BrowserRouter>
            <App
                dispatch={store.dispatch.bind(store)}
                state={state}
                />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})
