import React from "react";
import s from './Images.module.css';
import UserContentWallImagesItem from "./imageItem/ImagesItem";
import {addImageCreator, updateNewImageCreator} from "../../../UI/state/imageReducer";



const UserContentWallImages = (props) => {
    let newImage = React.createRef();

    let addImage = () => {
        props.dispatch ( addImageCreator() );
    }

    let onImageChange = () => {
        let text = newImage.current.value;
        props.dispatch ( updateNewImageCreator(text) );
    }

    let imageElement = props.state.imagesData.map ( i => <UserContentWallImagesItem id={i.id} image={i.image}
        folder={i.folder} url={i.url} informations={i.informations} avatar={i.avatar} name={i.name} /> )

    return (
        <div className={s.pageWrapper}>
            <div className={s.buttonWrapper}>
                <button onClick={addImage}>
                    <img src='addIcon.png' alt=""/>
                </button>
                <textarea ref={newImage} onChange={onImageChange} value={props.state.newImageText}
                          placeholder={'What would you like to describe ..?'}></textarea>
                <button onClick={addImage}>
                    <img src='addIcon.png' alt=""/>
                </button>
            </div>
            <div className={s.wrapperImageElement}>
                {imageElement}
            </div>
        </div>
    )
}

export default UserContentWallImages