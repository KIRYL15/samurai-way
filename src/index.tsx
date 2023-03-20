import React from 'react';
import {App} from "./App";
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {store} from './redux/store'

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree)
rerenderEntireTree()
