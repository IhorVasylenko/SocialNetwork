import React from "react";
import s from './WallHeader.module.css';

const UserContentWallWallHeader = (props) => {
    return (
        <div className={s.header}>
            <img className={s.avatarImg} src="myAvatar.jpg" alt=""/>
            <textarea name="" id="" cols="25" rows="3" placeholder="What du you want ?"></textarea>
            <div className={s.logos}>
                <div>
                    <a href=""><img src="addTextLogo.jpg" alt=""/></a>
                    <a href=""><img src="addMusicLogo.jpg" alt=""/></a>
                </div>
                <div>
                    <a href=""><img src="addPictureLogo.jpg" alt=""/></a>
                    <a href=""><img src="addVideoLogo.jpg" alt=""/></a>
                </div>
            </div>
            <button>Add post</button>
        </div>
    )
}

export default UserContentWallWallHeader