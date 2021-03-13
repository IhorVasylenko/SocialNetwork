import React from "react";
import {addNewMessage} from "../../../../UI/state/messageReducer";
import UserContentWallMessages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
     return {
         dialogsData: state.messagePage.dialogsData,
         cntactMessagesData: state.messagePage.cntactMessagesData,
         myMessagesData: state.messagePage.myMessagesData
     }
 }

export default compose(
    connect (mapStateToProps, {addNewMessage}),withAuthRedirect) (UserContentWallMessages)