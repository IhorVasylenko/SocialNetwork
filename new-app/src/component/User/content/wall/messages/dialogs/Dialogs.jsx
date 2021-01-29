import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/messages/' + props.id;

    return <li className={s.dialog}>
        <NavLink to={path}>
            <div className={s.contact}>
                <img src={process.env.PUBLIC_URL + props.avatar} alt=""/>
                <div className={s.preview}>
                    <p>{props.name}</p>
                    <small>{props.passed}</small>
                    <div className={s.seen}>
                        {props.seen}
                    </div>
                </div>
            </div>
        </NavLink>
    </li>
}

export default DialogItem