import React from "react";
import UserContentWallMyPostsPost from "./post/Post";
import UserContentWallWallHeader from "../wallHeader/WallHeader";
import s from './MyPosts.module.css'
import Follow from "../../follow/Follow";

const UserContentWallMYPosts = (props) => {

    return (
        <div className={s.wrapper}>
            <UserContentWallWallHeader addPost={props.addPost} updateNewPost={props.updateNewPost} newPostText={props.newPostText} />
            <UserContentWallMyPostsPost commentsData={props.commentsData} PostData={props.PostData} newCommentText={props.newCommentText}
                                        addComment={props.addComment} updateComment={props.updateComment} />
            <div className={s.follow}>
                <Follow />
            </div>
        </div>
    )
}

export default UserContentWallMYPosts