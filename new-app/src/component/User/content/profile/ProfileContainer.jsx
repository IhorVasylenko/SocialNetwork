import React from "react";
import s from './Profile.module.css';
import Follow from "../follow/Follow";
import UserContentProfile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../../UI/state/profileReducer";
import { withRouter } from "react-router-dom";

class UserContentProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId )
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render () {
        return (
            <div className={s.wrapper}>
                <UserContentProfile {...this.props} profile={this.props.profile}/>
                <Follow />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


let WithUrlDataContainerComponent = withRouter (UserContentProfileContainer);

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);
