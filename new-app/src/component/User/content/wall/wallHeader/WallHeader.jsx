import React from "react";
import s from './WallHeader.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../../common/formsControl/FormsControl";

const maxLength10 = maxLengthCreator(10);

const UserContentWallWallHeader = (props) => {

    return (
        <form className={s.header} onSubmit={props.handleSubmit}>
            <img className={s.avatarImg} src='/myAvatar.jpg' alt=""/>
            <Field placeholder={'What du you want ?'} name={'newMessageText'} component={Textarea} validate={[required, maxLength10]} />
            <div className={s.logos}>
                <div>
                    <a href=""><img src='/addTextLogo.jpg' alt=""/></a>
                    <a href=""><img src='/addMusicLogo.jpg' alt=""/></a>
                </div>
                <div>
                    <a href=""><img src='/addPictureLogo.jpg' alt=""/></a>
                    <a href=""><img src='/addVideoLogo.jpg' alt=""/></a>
                </div>
            </div>
            <button>Add post</button>
        </form>
    )
}

const UserContentWallWallHeaderReduxForm = reduxForm({form: 'newMessageForm'}) (UserContentWallWallHeader)

export default UserContentWallWallHeaderReduxForm