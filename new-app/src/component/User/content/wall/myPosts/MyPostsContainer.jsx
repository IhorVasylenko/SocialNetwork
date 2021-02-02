import React from "react";
import UserContentWallMyPostsPost from "./post/Post";
import UserContentWallWallHeader from "../wallHeader/WallHeader";
import s from './MyPosts.module.css'
import Follow from "../../follow/Follow";

const UserContentWallMYPosts = (props) => {

    return (
        <div className={s.wrapper}>
            <UserContentWallWallHeader dispatch={props.dispatch} newPostText={props.state.newPostText} />
            <UserContentWallMyPostsPost commentsData={props.state.commentsData} PostData={props.state.PostData}
                                        newCommentText={props.state.newCommentText} dispatch={props.dispatch} />
            <div className={s.follow}>
                <Follow />
            </div>
        </div>
    )
}

export default UserContentWallMYPosts