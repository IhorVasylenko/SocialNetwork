import React from "react";
import s from './Comment.module.css';
import DialogItem from "../../../messages/dialogs/Dialogs";

const CommentsItem = (props) => {

    return <div className={s.comments}>
        <img src={process.env.PUBLIC_URL + props.avatar} alt=""/>
        <div className={s.text}>
            <a href="#">
                {props.name}
            </a>
            <div className={s.wrap}>
                {props.text}
            </div>
        </div>
    </div>
}

const UserContentWallMyPostsPostComment = (props) => {
    let commentsItemElement = props.commentsData.map(c => <CommentsItem key={c.id} id={c.id} avatar={c.avatar} name={c.name} text={c.text} />)

    return (
        <div className={s.wrapper}>
            {commentsItemElement}
        </div>
    )
}

export default UserContentWallMyPostsPostComment