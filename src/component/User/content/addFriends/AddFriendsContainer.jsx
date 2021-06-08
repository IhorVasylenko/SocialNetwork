import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, unfollow } from "../../../UI/state/addFriendsReducer";
import UserContentAddFriends from "./AddFriends";
import PreLoader from "../../../common/preLoader/preLoader.jsx";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize,
    getTotalUsersCount, getUsersData
} from "../../../UI/state/addFriendsSelektors";

class UserContentAddFriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ?
                <PreLoader /> : null }
            <UserContentAddFriends totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                                   usersData={this.props.usersData} unfollow={this.props.unfollow}
                                   follow={this.props.follow} followingInProgress={this.props.followingInProgress} />
        </>
    }
}

/*let mapStateToProps = (state) => {
    return {
        usersData: state.addFriendsPage.usersData,
        pageSize: state.addFriendsPage.pageSize,
        totalUsersCount: state.addFriendsPage.totalUsersCount,
        currentPage: state.addFriendsPage.currentPage,
        isFetching: state.addFriendsPage.isFetching,
        followingInProgress: state.addFriendsPage.followingInProgress

    }
}*/
let mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}

export default compose (
    connect (mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}))
(UserContentAddFriendsContainer)
