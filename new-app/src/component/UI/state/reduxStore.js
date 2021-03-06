import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import imageReducer from "./imageReducer";
import addFriendsReducer from "./addFriendsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    postPage: postReducer,
    messagePage: messageReducer,
    imagePage: imageReducer,
    addFriendsPage: addFriendsReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

export default store