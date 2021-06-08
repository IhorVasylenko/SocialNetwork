import React from "react";
import s from './Images.module.css';
import UserContentWallImagesItem from "./imageItem/ImagesItem";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../../common/formsControl/FormsControl";



const UserContentWallImages = (props) => {

    let imageElement = props.imagesData.map ( i => <UserContentWallImagesItem key={i.id} id={i.id} image={i.image}
        folder={i.folder} url={i.url} informations={i.informations} avatar={i.avatar} name={i.name} /> )

    let addImageText = (value) => {
        props.addImage(value.newImagesText)
    }

    return (
        <div className={s.pageWrapper}>
            <AddImageReduxForm onSubmit={addImageText} />
            <div className={s.wrapperImageElement}>
                {imageElement}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const AddImageForm = (props) => {
    return (
        <form className={s.buttonWrapper} onSubmit={props.handleSubmit}>
            <button>
                <img src='addIcon.png' alt=""/>
            </button>
            <Field name={'newImagesText'} component={Textarea} placeholder={'What would you like to describe ..?'}
                   validate={[required, maxLength10]} />
            <button>
                <img src='addIcon.png' alt=""/>
            </button>
        </form>
    )
}

const AddImageReduxForm = reduxForm ({form: 'addNewImagesText'}) (AddImageForm)

export default UserContentWallImages