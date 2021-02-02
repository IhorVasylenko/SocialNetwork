import React from "react";
import s from './Post.module.css';
import {PostItem} from "./postElement/PostElement";

const UserContentWallMyPostsPost = (props) => {

    let postElement = props.PostData.map( p => <PostItem
                                                newCommentText={props.newCommentText} commentsData={props.commentsData}
                                                addComment={props.addComment} updateComment={props.updateComment}
                                                id={p.id} name={p.name} avatar={p.avatar} passed={p.passed} text={p.text}
                                                likesCount={p.likesCount} media={p.media} />);

    return (
        <div className={s.wrapper}>
            {postElement}
        </div>
    )
}

export default UserContentWallMyPostsPost
