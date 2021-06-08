import React from "react";
import UserContentWallMYPosts from "./MyPosts";
import {addComment, addPost} from "../../../../UI/state/postReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        PostData: state.postPage.PostData,
        commentsData: state.postPage.commentsData
    }
}

export default compose (
    connect (mapStateToProps, {addPost, addComment}),
    withAuthRedirect
) (UserContentWallMYPosts)