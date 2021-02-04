import React from "react";
import s from './Wall.module.css';
import {Route} from "react-router-dom";
import UserContentWallImagesContainer from "../images/ImagesContainer";
import UserContentWallMessagesContainer from "./messages/MessagesContainer";
import UserContentWallMYPostsContainer from "./myPosts/MyPostsContainer";
import UserContentAddFriendsContainer from "../addFriends/AddFriendsContainer";

const UserContentWall = (props) => {
    return (
            <div className={s.wrapper}>
                    <Route path='/myPosts' render={ () => <UserContentWallMYPostsContainer /> } />
                    <Route path='/messages' render={ () => <UserContentWallMessagesContainer /> } />
                    <Route path='/images' render={ () => <UserContentWallImagesContainer /> } />
                    <Route path='/addFriends' render={ () => <UserContentAddFriendsContainer /> } />
            </div>
    )
}

export default UserContentWall