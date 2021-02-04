import React from "react";
import UserContentAddFriends from "./AddFriends";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../../UI/state/addFriendsReducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.addFriendsPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

const UserContentAddFriendsContainer = connect (mapStateToProps, mapDispatchToProps) (UserContentAddFriends)

export default UserContentAddFriendsContainer