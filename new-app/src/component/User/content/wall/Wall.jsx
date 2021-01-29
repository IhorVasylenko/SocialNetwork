import React from "react";
import s from './Wall.module.css';
import {Route} from "react-router-dom";
import UserContentWallWallHeader from "./wallHeader/WallHeader";
import UserContentWallMYPosts from "./myPosts/MyPosts";
import UserContentWallMessages from "./messages/Messages";

const UserContentWall = (props) => {
    return (
            <div className={s.wrapper}>
                <UserContentWallWallHeader  addNewPost={props.addNewPost} newPostText={props.state.postsPage.newPostText}
                                            updateNewPostText={props.updateNewPostText}/>
                <div>
                    <Route path='/myPosts' render={ () => <UserContentWallMYPosts state={props.state.postsPage} addNewComment={props.addNewComment}
                                                                                  updateNewCommentText={props.updateNewCommentText}/> } />
                    <Route path='/messages' render={ () => <UserContentWallMessages state={props.state.messagesPage} addNewMessage={props.addNewMessage}/> } />
                </div>
            </div>
    )
}

export default UserContentWall