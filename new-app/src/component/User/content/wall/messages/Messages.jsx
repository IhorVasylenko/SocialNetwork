import React from "react";
import s from './Messages.module.css';
import DialogItem from './dialogs/Dialogs';
import {ContactMessages, MyMessages} from "./letters/Letters";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../../../common/formsControl/FormsControl";

const UserContentWallMessages = (props) => {

    let dialogsElements = props.dialogsData.map(d =>
        <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} passed={d.passed} seen={d.seen} />);

    let contactMessagesElements = props.cntactMessagesData.map(c =>
        <ContactMessages key={c.id} id={c.id} name={c.name} avatar={c.avatar} passed={c.passed} message={c.message}/>);

    let myMessagesElements = props.myMessagesData.map(m =>
        <MyMessages key={m.id} id={m.id} name={m.name} avatar={m.avatar} passed={m.passed} message={m.message}/>);

    let addNewMessage = (value) => {
        props.addNewMessage(value.newMessageText)
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
            <MessageReduxForm onSubmit={addNewMessage} />
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const MessageForm = (props) => {
    return (
        <form className={s.addMessageWrapper} onSubmit={props.handleSubmit}>
            <button>Add message</button>
            <Field className={s.formControl} name={'newMessageText'} component={Textarea}
                   placeholder={'What do you want to write?'} validate={[required, maxLength10]} />
        </form>
    )
}

const MessageReduxForm = reduxForm ({form: 'newMessageForm'}) (MessageForm)

export default UserContentWallMessages