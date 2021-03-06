import React from "react";
import {connect} from "react-redux";
import {
    follow, setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, unfollow
} from "../../../UI/state/addFriendsReducer";
import * as axios from "axios";
import UserContentAddFriends from "./AddFriends";
import PreLoader from "../../../common/preLoader/preLoader.jsx";

class UserContentAddFriendsContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ?
                <PreLoader /> : null }
            <UserContentAddFriends totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                                   currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                                   usersData={this.props.usersData} unfollow={this.props.unfollow}
                                   follow={this.props.follow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.addFriendsPage.usersData,
        pageSize: state.addFriendsPage.pageSize,
        totalUsersCount: state.addFriendsPage.totalUsersCount,
        currentPage: state.addFriendsPage.currentPage,
        isFetching: state.addFriendsPage.isFetching

    }
}

export default connect (mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching}) (UserContentAddFriendsContainer)