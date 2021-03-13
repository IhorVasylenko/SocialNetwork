import React from "react";
import UserContentWallMyPostsPost from "./post/Post";
import UserContentWallWallHeaderReduxForm from "../wallHeader/WallHeader";
import s from './MyPosts.module.css'
import Follow from "../../follow/Follow";

const UserContentWallMYPosts = (props) => {

    let addNewMessage = (values) => {
        props.addPost(values.newMessageText)
    }

    return (
        <div className={s.wrapper}>
            <UserContentWallWallHeaderReduxForm onSubmit={addNewMessage} />
            <UserContentWallMyPostsPost commentsData={props.commentsData} PostData={props.PostData}
                                        addComment={props.addComment}/>
            <div className={s.follow}>
                <Follow />
            </div>
        </div>
    )
}

export default UserContentWallMYPosts