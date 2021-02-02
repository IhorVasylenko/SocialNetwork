import React from "react";
import UserContentWallMYPosts from "./MyPosts";
import {
    addCommentActionCreator,
    addPostActionCreator, updateCommentActionCreator,
    updateNewPostActionCreator
} from "../../../../UI/state/postReducer";

const UserContentWallMYPostsContainer = (props) => {
    let state=props.store.getState();

    let addPost = () => {
        props.store.dispatch( addPostActionCreator() );
    };
    let updateNewPost = (text) => {
        props.store.dispatch( updateNewPostActionCreator(text) );
    };

    let addComment = () => {
        props.store.dispatch( addCommentActionCreator() );
    }

    let updateComment = (text) => {
        props.store.dispatch( updateCommentActionCreator(text) );
    }

    return (
        <UserContentWallMYPosts
            newPostText={state.postPage.newPostText}  addPost={addPost} updateNewPost={updateNewPost}
            commentsData={state.postPage.commentsData} PostData={state.postPage.PostData} newCommentText={state.postPage.newCommentText}
            addComment={addComment} updateComment={updateComment} />
    )
}

export default UserContentWallMYPostsContainer