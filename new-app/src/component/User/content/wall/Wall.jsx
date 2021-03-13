import React from "react";
import s from './Wall.module.css';
import {Route} from "react-router-dom";
import UserContentWallImagesContainer from "../images/ImagesContainer";
import UserContentWallMessagesContainer from "./messages/MessagesContainer";
import UserContentWallMYPostsContainer from "./myPosts/MyPostsContainer";
import UserContentAddFriendsContainer from "../addFriends/AddFriendsContainer";
import UserContentProfileContainer from "../profile/ProfileContainer";
import Login from "../login/Login";


const UserContentWall = (props) => {
    return (
            <div className={s.wrapper}>
                    <Route path='/myPosts' render={ () => <UserContentWallMYPostsContainer /> } />
                    <Route path='/messages' render={ () => <UserContentWallMessagesContainer /> } />
                    <Route path='/images' render={ () => <UserContentWallImagesContainer /> } />
                    <Route path='/addFriends' render={ () => <UserContentAddFriendsContainer /> } />
                    <Route path='/profile/:userId?' render={ () => <UserContentProfileContainer /> } />
                    <Route path='/login' render={ () => <Login /> } />
            </div>
    )
}

export default UserContentWall