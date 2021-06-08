import React from "react";
import s from './Profile.module.css';
import Follow from "../follow/Follow";
import UserContentProfile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserData, updateStatus} from "../../../UI/state/profileReducer";
import { withRouter } from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";

class UserContentProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserData(userId);
        this.props.getStatus(userId);

    }

    render () {
        return (
            <div className={s.wrapper}>
                <UserContentProfile {...this.props} profile={this.props.profile}
                                    status={this.props.status} updateStatus={this.props.updateStatus}/>
                <Follow />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    connect (mapStateToProps, {getUserData, getStatus, updateStatus}), withRouter)
(UserContentProfileContainer)
