import {combineReducers, createStore} from "redux";
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";
import imageReducer from "./imageReducer";

let reducers = combineReducers({
    postPage: postReducer,
    messagePage: messageReducer,
    imagePage: imageReducer
});

let store = createStore(reducers);

export default store