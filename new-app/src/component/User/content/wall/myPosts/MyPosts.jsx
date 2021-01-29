import React from "react";
import UserContentWallMyPostsPost from "./post/Post";
import UserContentWall from "../Wall";

const UserContentWallMYPosts = (props) => {

    return (
        <div>
            <UserContentWallMyPostsPost commentsData={props.state.commentsData} PostData={props.state.PostData}
                                        newCommentText={props.state.newCommentText} addNewComment={props.addNewComment}
                                        updateNewCommentText={props.updateNewCommentText}/>
        </div>
    )
}

export default UserContentWallMYPosts