import React from "react";
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/messages/' + props.id;

    return <li className={s.dialog}>
        <NavLink to={path}>
            <div className={s.contact}>
                <img src={process.env.PUBLIC_URL + props.avatar} />
                <div className={s.preview}>
                    <h6>{props.name}</h6>
                    <p>{props.lastmessage}</p>
                    <small>{props.passed}</small>
                    <div className={s.seen}>
                        {props.seen}
                    </div>
                </div>
            </div>
        </NavLink>
    </li>
}

const MessageItem = (props) => {

    return <div className={s.message}>
        {props.message}
    </div>
}

const UserContentWallMessages = (props) => {
    let dialogsData = [
        {id: 1, name: 'Mirime', avatar: '/avatar1.jpg', passed: 'a min ago', seen: 3, lastmessage: 'The World Is Changed.'},
        {id: 2, name: 'Eru Thingol', avatar: '/avatar2.jpg', passed: 'an hour ago', seen: <img src={process.env.PUBLIC_URL + "/checkIcon.png"} alt=''/>, lastmessage: 'The Quest Stands Upon The Edge Of A Knife.'},
        {id: 3, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', seen: <img src={process.env.PUBLIC_URL + "/shareIcon.png"} alt=''/>, lastmessage: 'Do Not Be Afraid, Mithrandir. You Are Not Alone.'},
        {id: 4, name: 'Yngve', avatar: '/avatar4.jpg', passed: 'Yesterday', seen: 1, lastmessage: 'But The Hearts Of Men Are Easily Corrupted.'},
        {id: 5, name: 'Lúthien Tinuviel', avatar: '/avatar5.jpg', passed: '2 days ago', seen: <img src={process.env.PUBLIC_URL + "/checkIcon.png"} alt=''/>, lastmessage: 'In Place Of A Dark Lord You Would Have A Queen!'}
    ];

    let messagesData =[
        {id: 1, message: 'Do Not Be Afraid, Mithrandir. You Are Not Alone.'},
        {id: 2, message: 'The Power Of The Three Rings Has Ended. The Time Has Come ... For The Dominion Of Men.'},
        {id: 3, message: 'The World Is Changed.'},
        {id: 4, message: 'But The Hearts Of Men Are Easily Corrupted.'},
        {id: 5, message: 'The Quest Stands Upon The Edge Of A Knife.'},
        {id: 6, message: 'In Place Of A Dark Lord You Would Have A Queen!'},
        {id: 7, message: 'Even The Smallest Person Can Change The Course Of The Future.'},
        {id: 8, message: 'May It Be A Light For You In Dark Places, When All Other Lights Go Out.'},
        {id: 9, message: 'Do We Leave Middle-Earth To Its Fate? Do We Let Them Stand Alone?'},
        {id: 10, message: 'You Have No Power Here, Servant Of Morgoth! You Are Nameless! Faceless! Formless! Go Back To The\n' +
                '                    Void From Whence You Came!'}
    ];


    let dialogsElements = dialogsData.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar} passed={d.passed}
                                                           seen={d.seen} lastmessage={d.lastmessage}/>);

    let messagesElements = messagesData.map(m => <MessageItem id={m.id} message={m.message}/>);


    return (
        <div className={s.wrapper}>
            <div className={s.dialogsWrapper}>
                <ul className={s.dialogs}>
                    {dialogsElements}
                </ul>
                <div className={s.scroll}></div>
            </div>
            <div className={s.messagesWrapper}>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default UserContentWallMessages