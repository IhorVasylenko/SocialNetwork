import React from "react";
import s from './Wall.module.css';
import {Route} from "react-router-dom";
import UserContentWallImagesContainer from "../images/ImagesContainer";
import UserContentWallMessagesContainer from "./messages/MessagesContainer";
import UserContentWallMYPostsContainer from "./myPosts/MyPostsContainer";

const UserContentWall = (props) => {
    return (
            <div className={s.wrapper}>
                    <Route path='/myPosts' render={ () => <UserContentWallMYPostsContainer store={props.store}/> } />
                    <Route path='/messages' render={ () => <UserContentWallMessagesContainer store={props.store}/> } />
                    <Route path='/images' render={ () => <UserContentWallImagesContainer store={props.store}/> } />
            </div>
    )
}

export default UserContentWall