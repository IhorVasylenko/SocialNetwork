import React from "react";
import s from './Comment.module.css';

const UserContentWallMyPostsPostComment = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.comments}>
                <img src='hesAvatar.jpg' alt=""/>
                <p>
                    <a href="">Gandalf Gray</a>
                    Why is it that people who can't take advice always insist on giving it ?
                </p>
            </div>
        </div>
    )
}

export default UserContentWallMyPostsPostComment