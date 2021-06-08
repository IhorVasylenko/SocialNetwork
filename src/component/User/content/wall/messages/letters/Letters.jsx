import React from "react";
import s from './Letters.module.css';

const ContactMessages = (props) => {

    return <div className={s.contactMessages}>
        <img src={process.env.PUBLIC_URL + props.avatar} alt=""/>
        <div className={s.message}>
            <div className={s.header}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.passed}>
                    {props.passed}
                </div>
            </div>
            <div className={s.text}>
                {props.message}
            </div>
        </div>
    </div>
}

const MyMessages = (props) => {

    return <div className={s.myMessages}>
        <img src={props.avatar !== 0 ? props.avatar : '/noPhotoAvatar.png'} alt=""/>
        <div className={s.message}>
            <div className={s.header}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.passed}>
                    {props.passed}
                </div>
            </div>
            <div className={s.text}>
                {props.message}
            </div>
        </div>
    </div>
}

export {
    ContactMessages,
    MyMessages
};