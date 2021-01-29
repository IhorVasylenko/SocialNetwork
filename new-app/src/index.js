import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./component/UI/state/State";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addNewPost={store.addNewPost.bind(store)} addNewMessage={store.addNewMessage.bind(store)}
                     addNewComment={store.addNewComment.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
                     updateNewCommentText={store.updateNewCommentText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
    reportWebVitals();
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);