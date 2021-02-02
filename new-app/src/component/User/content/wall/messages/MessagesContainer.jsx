import React from "react";
import {addNewMessage} from "../../../../UI/state/messageReducer";
import UserContentWallMessages from "./Messages";

const UserContentWallMessagesContainer = (props) => {
    let state = props.store.getState();

    let addMessage = (text) => {
        props.store.dispatch( addNewMessage(text) );
    }

    return (
        <UserContentWallMessages dialogsData={state.messagePage.dialogsData} cntactMessagesData={state.messagePage.cntactMessagesData}
            myMessagesData={state.messagePage.myMessagesData} addMessage={addMessage}/>
    )
};

export default UserContentWallMessagesContainer