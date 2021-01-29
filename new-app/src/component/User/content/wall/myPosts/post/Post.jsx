import React from "react";
import s from './Post.module.css';
import {PostItem} from "./postElement/PostElement";

const UserContentWallMyPostsPost = (props) => {

    let postElement = props.PostData.map( p => <PostItem updateNewCommentText={props.updateNewCommentText}
                                                         newCommentText={props.newCommentText}
                                                         addNewComment={props.addNewComment} commentsData={props.commentsData}
                                                          id={p.id} name={p.name} avatar={p.avatar} passed={p.passed}
                                                   text={p.text} likesCount={p.likesCount} media={p.media} />);

    return (
        <div className={s.wrapper}>
            {postElement}
        </div>
    )
}

export default UserContentWallMyPostsPost
