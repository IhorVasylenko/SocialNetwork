import React from "react";
import s from './PostElement.module.css';
import UserContentWallMyPostsPostComment from "../comments/Comment";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../utils/validators/validators";
import {Textarea} from "../../../../../../common/formsControl/FormsControl";

const PostItem = React.memo((props) => {
    let addNewComment = (values) => {
        props.addComment(values.newCommentText)
    }

    return <div className={s.post}>
        <div className={s.addedMedia}>{props.media}</div>
        <div className={s.header}   >
            <img src={process.env.PUBLIC_URL + props.avatar} alt=""/>
            <div className={s.postInformations}>
                <div className={s.authorName}>
                    <a href="#">
                        {props.name}
                    </a>
                </div>
                <div className={s.publicationDate}>
                    {props.passed}.
                </div>
            </div>
            <span className={s.likes}> {/*Иконка для лайков.*/}
                <div>
                    <img src={process.env.PUBLIC_URL + "./likeIcon.png"} alt=""/>
                        </div>
                        <div className={s.likesCount}>
                            {props.likesCount}
                        </div>
                    </span>
        </div>
        <div className={s.text}>
            {props.text}
        </div>
        <UserContentWallMyPostsPostComment commentsData={props.commentsData} />
        <CommentReduxForm onSubmit={addNewComment}/>
    </div>
})

const maxLength10 = maxLengthCreator(10);

const CommentForm = (props) => {
    return (
        <form className={s.addMyComent} onSubmit={props.handleSubmit}>
            <img src={process.env.PUBLIC_URL + "./myAvatar.jpg"} alt=""/>
            <Field name={'newCommentText'} component={Textarea} placeholder={'Add comment...'} validate={[required, maxLength10]} />
            <button>Add</button>
        </form>
    )
}

const CommentReduxForm = reduxForm({form: 'newCommentForm'}) (CommentForm)

const MediaItem = (props) => {
    return <div className={s.addedMedia}>
        {props.media}
        {/**/}
    </div>
}

export {
    PostItem,
    MediaItem,
}
