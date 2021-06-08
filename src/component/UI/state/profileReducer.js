import {profileAPI} from "../../api/api";

const SET_USER_PROFILE = 'goToIt/profile/SET_USER_PROFILE'
const SET_STATUS = 'goToIt/profile/SET_STATUS'

let initialState = {
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserData = (userId) => {
    return (dispatch) =>{
        profileAPI.getUserData(userId).then(data => {
            dispatch (setUserProfile(data));
        });
    }
}

export const getStatus = (userId) => {
    return (dispatch) =>{
        profileAPI.getStatus(userId).then(data => {
            dispatch (setStatus(data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) =>{

        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0)
            dispatch (setStatus(status));
        });
    }
}

export default profileReducer
