import React from "react";
import s from './PostElement.module.css';
import UserContentWallMyPostsPostComment from "../comments/Comment";

const PostItem = (props) => {
    let newComment = React.createRef();

    let addComment = () => {
        props.addNewComment();
    }

    let onCommentChange = () => {
        let text = newComment.current.value;
        props.updateNewCommentText(text);
    }

    return <div className={s.post}>
        <div className={s.addedMedia}>{props.media}</div>
        <div className={s.header}   >
            <img src={process.env.PUBLIC_URL + props.avatar} alt=""/>
            <div className={s.postInformations}>
                <div className={s.authorName}>
                    <a href="#">
                        {props.name}
                    </a>
                </div>
                <div className={s.publicationDate}>
                    {props.passed}.
                </div>
            </div>
            <span className={s.likes}> {/*Иконка для лайков.*/}
                <div>
                    <img src={process.env.PUBLIC_URL + "./likeIcon.png"} alt=""/>
                        </div>
                        <div className={s.likesCount}>
                            {props.likesCount}
                        </div>
                    </span>
        </div>
        <div className={s.text}>
            {props.text}
        </div>
        <UserContentWallMyPostsPostComment commentsData={props.commentsData} />
        <div className={s.addMyComent}>
            <img src={process.env.PUBLIC_URL + "./myAvatar.jpg"} alt=""/>
            <textarea name="" ref={newComment} id="" cols="30" rows="10" onChange={onCommentChange} value={props.newCommentText} placeholder="Add comment..." />
            <button onClick={addComment}>Add</button>
        </div>
    </div>
}

const MediaItem = (props) => {
    return <div className={s.addedMedia}>
        {props.media}
        {/**/}
    </div>
}

export {
    PostItem,
    MediaItem,
}
