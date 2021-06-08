import React from "react";
import UserHeader from "./Header";
import {connect} from "react-redux";
import {logout} from "../../UI/state/authReducer";

class UserHeaderContainer extends React.Component {
    render() {
        return <UserHeader { ...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {logout}) (UserHeaderContainer)