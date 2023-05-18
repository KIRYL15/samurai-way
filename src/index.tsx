import React from 'react';
import App from "./App";
import ReactDOM from 'react-dom';
import {AppStateType} from "./redux/redux-store";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
