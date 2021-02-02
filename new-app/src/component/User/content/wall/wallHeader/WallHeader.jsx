import React from "react";
import s from './WallHeader.module.css';

const UserContentWallWallHeader = (props) => {
    let newPost = React.createRef ();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPost(text);
    };

    return (
        <div className={s.header}>
            <img className={s.avatarImg} src="myAvatar.jpg" alt=""/>
            <textarea name="" id="" onChange={onPostChange} ref={newPost} cols="25" rows="3"
                      value={props.newPostText} placeholder="What du you want ?" />
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
            <button onClick={onAddPost}>Add post</button>
        </div>
    )
}

export default UserContentWallWallHeader