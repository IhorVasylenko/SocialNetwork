import React from "react";
import s from './Wall.module.css';
import {BrowserRouter, Route} from "react-router-dom";

import UserContentWallWallHeader from "./wallHeader/WallHeader";
import UserContentWallMYPosts from "./myPosts/MyPosts";
import UserContentWallMessages from "./messages/Messages";


const UserContentWall = (props) => {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <UserContentWallWallHeader />
                <div>
                    <Route path='/myPosts' component={UserContentWallMYPosts} />
                    <Route path='/messages' component={UserContentWallMessages} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default UserContentWall