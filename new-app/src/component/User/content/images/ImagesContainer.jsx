import React from "react";
import {addImageCreator, updateNewImageCreator} from "../../../UI/state/imageReducer";
import UserContentWallImages from "./Images";



const UserContentWallImagesContainer = (props) => {
    let state = props.store.getState();

    let addImage = () => {
        props.store.dispatch ( addImageCreator() );
    }

    let updateNewImageText = (text) => {
        props.store.dispatch ( updateNewImageCreator(text) );
    }

    return (
        <UserContentWallImages
            updateNewImageText={updateNewImageText} addImage={addImage}
            imagesData={state.imagePage.imagesData} newImageText={state.imagePage.newImageText}/>
    )
}

export default UserContentWallImagesContainer