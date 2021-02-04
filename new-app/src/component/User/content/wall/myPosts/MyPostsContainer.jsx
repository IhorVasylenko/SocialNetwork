import React from "react";
import UserContentWallMYPosts from "./MyPosts";
import {
    addCommentActionCreator,
    addPostActionCreator, updateCommentActionCreator,
    updateNewPostActionCreator
} from "../../../../UI/state/postReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        PostData: state.postPage.PostData,
        newPostText: state.postPage.newPostText,
        commentsData: state.postPage.commentsData,
        newCommentText: state.postPage.newCommentText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPost: (text) => {dispatch(updateNewPostActionCreator(text))},
        addComment: () => {dispatch(addCommentActionCreator())},
        updateComment: (text) => {dispatch(updateCommentActionCreator(text))}
    }
}

const UserContentWallMYPostsContainer = connect (mapStateToProps, mapDispatchToProps) (UserContentWallMYPosts);

export default UserContentWallMYPostsContainer