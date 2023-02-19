import React from 'react';
import ReactDOM from 'react-dom';
import {state} from './redux/state'
import {rerenderEntireTree} from "./render";

rerenderEntireTree(state)

//
// ReactDOM.render(
//     <BrowserRouter>
//         <App state={state} addPost={addPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
// );