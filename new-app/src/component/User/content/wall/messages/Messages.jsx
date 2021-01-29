import React from "react";
import s from './Messages.module.css';
import DialogItem from './dialogs/Dialogs';
import {ContactMessages, MyMessages} from "./letters/Letters";

const UserContentWallMessages = (props) => {
    let dialogsElements = props.state.dialogsData.map(d =>
        <DialogItem id={d.id} name={d.name} avatar={d.avatar} passed={d.passed} seen={d.seen} />);

    let contactMessagesElements = props.state.cntactMessagesData.map(c =>
        <ContactMessages id={c.id} name={c.name} avatar={c.avatar} passed={c.passed} message={c.message}/>);

    let myMessagesElements = props.state.myMessagesData.map(m =>
        <MyMessages id={m.id} name={m.name} avatar={m.avatar} passed={m.passed} message={m.message}/>);

    /*let messagesItems = [
        contactMessagesElements[0],
        myMessagesElements[0],
        myMessagesElements[1],
        contactMessagesElements[1],
        myMessagesElements[2],
        contactMessagesElements[2],
        contactMessagesElements[3],
        myMessagesElements[3],
        contactMessagesElements[4],
        myMessagesElements[4]
    ];*/

    let newMessage = React.createRef ();
    let addMessage = () => {
        let text = newMessage.current.value;
        props.addNewMessage(text);
        newMessage.current.value = '';
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
                    {/*{messagesItems}*/}
                    {contactMessagesElements}
                    {myMessagesElements}
                </div>
            </div>
            <div className={s.addMessageWrapper}>
                <textarea className={s.formControl} name="" ref={newMessage}
                          id="" cols="30" rows="3" placeholder={'What do you want to write?'} />
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default UserContentWallMessages