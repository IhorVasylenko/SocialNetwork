import React from "react";
import s from './MyPosts.module.css'

import UserContentWallMyPostsPost from "./post/Post";


const UserContentWallMYPosts = (props) => {
    return (
        <div>
            <UserContentWallMyPostsPost />
            <UserContentWallMyPostsPost />
        </div>
    )
}

export default UserContentWallMYPosts