import React from "react";
import {addNewMessageCreator, updateNewMessageTextCreator} from "../../../../UI/state/messageReducer";
import UserContentWallMessages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
     return {
         dialogsData: state.messagePage.dialogsData,
         cntactMessagesData: state.messagePage.cntactMessagesData,
         myMessagesData: state.messagePage.myMessagesData,
         newMyMessageText: state.messagePage.newMyMessageText
     }
 }

const mapDispatchToProps = (dispatch) => {
     return {
         addMessage: (text) => {dispatch(addNewMessageCreator(text))},
         updateNewMessageText: (text) => {dispatch(updateNewMessageTextCreator(text))}
     }
}

const UserContentWallMessagesContainer = connect (mapStateToProps, mapDispatchToProps) (UserContentWallMessages);

export default UserContentWallMessagesContainer