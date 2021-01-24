import React from "react";
import s from './Wall.module.css';
import {Route} from "react-router-dom";

import UserContentWallWallHeader from "./wallHeader/WallHeader";
import UserContentWallMYPosts from "./myPosts/MyPosts";
import UserContentWallMessages from "./messages/Messages";


const UserContentWall = (props) => {
    return (
            <div className={s.wrapper}>
                <UserContentWallWallHeader />
                <div>
                    <Route path='/myPosts' component={UserContentWallMYPosts} />
                    <Route path='/messages' component={UserContentWallMessages} />
                </div>
            </div>
    )
}

export default UserContentWall