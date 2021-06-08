import React from "react";
import UserContentWallImages from "./Images";
import {connect} from "react-redux";
import {compose} from "redux";
import {addImage} from "../../../UI/state/imageReducer";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        imagesData: state.imagePage.imagesData
    }
}


export default compose (
    connect (mapStateToProps, {addImage}),withAuthRedirect) (UserContentWallImages)