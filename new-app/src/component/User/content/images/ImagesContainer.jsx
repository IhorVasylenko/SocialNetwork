import React from "react";
import {addImageCreator, updateNewImageCreator} from "../../../UI/state/imageReducer";
import UserContentWallImages from "./Images";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        imagesData: state.imagePage.imagesData,
        newImageText: state.imagePage.newImageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addImage: () => {dispatch(addImageCreator())},
        updateNewImageText: (text) => {dispatch(updateNewImageCreator(text))}
    }
}

const UserContentWallImagesContainer = connect(mapStateToProps, mapDispatchToProps) (UserContentWallImages);

export default UserContentWallImagesContainer