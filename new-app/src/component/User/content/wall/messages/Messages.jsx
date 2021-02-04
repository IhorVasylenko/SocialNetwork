import React from "react";
import s from './Messages.module.css';
import DialogItem from './dialogs/Dialogs';
import {ContactMessages, MyMessages} from "./letters/Letters";

const UserContentWallMessages = (props) => {

    let dialogsElements = props.dialogsData.map(d =>
        <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} passed={d.passed} seen={d.seen} />);

    let contactMessagesElements = props.cntactMessagesData.map(c =>
        <ContactMessages key={c.id} id={c.id} name={c.name} avatar={c.avatar} passed={c.passed} message={c.message}/>);

    let myMessagesElements = props.myMessagesData.map(m =>
        <MyMessages key={m.id} id={m.id} name={m.name} avatar={m.avatar} passed={m.passed} message={m.message}/>);

    let newMessage = React.createRef ();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.dialogsWrapper}>
                <ul className={s.dialogs}>
                    {dialogsElements}
                </ul>
            </div>
            <div className={s.scrollWrapper}>
                <div className={s.messagesWrapper}>
                    {contactMessagesElements}
                    {myMessagesElements}
                </div>
            </div>
            <div className={s.addMessageWrapper}>
                <button onClick={onAddMessage}>Add message</button>
                <textarea className={s.formControl} ref={newMessage} value={props.newMyMessageText}
                          onChange={onMessageChange} placeholder={'What do you want to write?'} />
            </div>
        </div>
    )
}

export default UserContentWallMessages