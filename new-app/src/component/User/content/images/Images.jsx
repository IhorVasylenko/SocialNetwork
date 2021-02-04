import React from "react";
import s from './Images.module.css';
import UserContentWallImagesItem from "./imageItem/ImagesItem";



const UserContentWallImages = (props) => {
    let newImage = React.createRef();

    let onAddImage = () => {
        props.addImage();
    }

    let onImageChange = () => {
        let text = newImage.current.value;
        props.updateNewImageText(text);
    }

    let imageElement = props.imagesData.map ( i => <UserContentWallImagesItem key={i.id} id={i.id} image={i.image}
        folder={i.folder} url={i.url} informations={i.informations} avatar={i.avatar} name={i.name} /> )

    return (
        <div className={s.pageWrapper}>
            <div className={s.buttonWrapper}>
                <button onClick={onAddImage}>
                    <img src='addIcon.png' alt=""/>
                </button>
                <textarea ref={newImage} onChange={onImageChange} value={props.newImageText}
                          placeholder={'What would you like to describe ..?'}></textarea>
                <button onClick={onAddImage}>
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