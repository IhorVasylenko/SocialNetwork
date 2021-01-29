import React from "react";
import postReducer from "./postReducer";
import messageReducer from "./messageReducer";

/*const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_COMMENT = 'ADD-NEW-COMMENT';
const UPDATE_NEW_COMMENT_TEXT = 'UPDATE-NEW-COMMENT-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';*/

let store = {
    _state: {
        postsPage: {
            commentsData: [
                {id: 1, avatar: 'avatar1.jpg', name: 'Gandalf Gray', text: 'Why is it that people who can\'t take advice always insist on giving it ?'},
                {id: 2, avatar: 'avatar2.jpg', name: 'Bilbo Buggins', text: 'Why is it that people who can\'t take advice always insist on giving it ?'},
                {id: 3, avatar: 'avatar3.jpg', name: 'Gollum', text: 'Why is it that people who can\'t take advice always insist on giving it ?'},
                {id: 4, avatar: 'avatar4.jpg', name: 'Aragon', text: 'Why is it that people who can\'t take advice always insist on giving it ?'},
                {id: 5, avatar: 'avatar5.jpg', name: 'Legolas', text: 'Why is it that people who can\'t take advice always insist on giving it ?'}
            ],
            newCommentText: '',
            PostData: [
                {id: 1, name: 'Mirime', avatar: '/avatar1.jpg', passed: 'a min ago', likesCount: 7, text: "A long time ago, in a galaxy far, far away... It is a period of civil war. Rebel spaceships," +
                        "striking from a hidden base, have won their first victory against the evil Galactic Empire." +
                        "During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon," +
                        "the Death Star, an armored space station with enough power to destroy an entire planet." +
                        "Pursued by the Empires sinister agents, Princess Leia races home aboard her starship," +
                        "that can save her people and restore freedom to the galaxy....", media: <img src="https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/mrb-eb33.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1" alt=""/>},
                {id: 2, name: 'Eru Thingol', avatar: '/avatar2.jpg', passed: 'an hour ago', likesCount: 11, text: "A long time ago, in a galaxy far, far away... It is a period of civil war. Rebel spaceships," +
                        "striking from a hidden base, have won their first victory against the evil Galactic Empire." +
                        "During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon," +
                        "the Death Star, an armored space station with enough power to destroy an entire planet." +
                        "Pursued by the Empires sinister agents, Princess Leia races home aboard her starship," +
                        "that can save her people and restore freedom to the galaxy....", media: <img src="https://m.mrpickles.cn-fan.tv/images/characters.png" alt=""/>},
                {id: 3, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', likesCount: 29, text: "A long time ago, in a galaxy far, far away... It is a period of civil war. Rebel spaceships," +
                        "striking from a hidden base, have won their first victory against the evil Galactic Empire." +
                        "During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon," +
                        "the Death Star, an armored space station with enough power to destroy an entire planet." +
                        "Pursued by the Empires sinister agents, Princess Leia races home aboard her starship," +
                        "that can save her people and restore freedom to the galaxy....", media: <img src="https://img.nbc.com/sites/nbcunbc/files/images/2019/4/02/Futurama-Web-DynamicLead-Desktop-1920x1080.jpg" alt=""/>}
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Mirime', avatar: '/avatar1.jpg', passed: 'a min ago', seen: <span>1</span>},
                {id: 2, name: 'Eru Thingol', avatar: '/avatar2.jpg', passed: 'an hour ago', seen: <img src={process.env.PUBLIC_URL + "/checkIcon.png"} alt=''/>},
                {id: 3, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', seen: <img src={process.env.PUBLIC_URL + "/shareIcon.png"} alt=''/>},
                {id: 4, name: 'Yngve', avatar: '/avatar4.jpg', passed: 'Yesterday', seen: <span>99</span>},
                {id: 5, name: 'Lúthien Tinuviel', avatar: '/avatar5.jpg', passed: '2 days ago', seen: <img src={process.env.PUBLIC_URL + "/checkIcon.png"} alt=''/>},
                {id: 6, name: 'Mirime', avatar: '/avatar1.jpg', passed: 'a min ago', seen: <span>1</span>},
                {id: 7, name: 'Eru Thingol', avatar: '/avatar2.jpg', passed: 'an hour ago', seen: <img src={process.env.PUBLIC_URL + "/checkIcon.png"} alt=''/>},
                {id: 8, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', seen: <img src={process.env.PUBLIC_URL + "/shareIcon.png"} alt=''/>},
                {id: 9, name: 'Yngve', avatar: '/avatar4.jpg', passed: 'Yesterday', seen: <span>99</span>},
                {id: 10, name: 'Lúthien Tinuviel', avatar: '/avatar5.jpg', passed: '2 days ago', seen: <img src={process.env.PUBLIC_URL + "/checkIcon.png"} alt=''/>}

            ],
            cntactMessagesData: [
                {id: 1, name: 'Mirime', avatar: '/avatar1.jpg', passed: 'a min ago', message: 'Do Not Be Afraid, Mithrandir. You Are Not Alone.'},
                {id: 2, name: 'Eru Thingol', avatar: '/avatar2.jpg', passed: 'an hour ago', message: 'The Power Of The Three Rings Has Ended. The Time Has Come ... For The Dominion Of Men.'},
                {id: 3, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', message: 'The World Is Changed.'},
                {id: 4, name: 'Yngve', avatar: '/avatar4.jpg', passed: 'Yesterday', message: 'But The Hearts Of Men Are Easily Corrupted.'},
                {id: 5, name: 'Lúthien Tinuviel', avatar: '/avatar5.jpg', passed: '2 days ago', message: 'The Quest Stands Upon The Edge Of A Knife.'},
                {id: 6, name: 'Mirime', avatar: '/avatar1.jpg', passed: 'a min ago', message: 'In Place Of A Dark Lord You Would Have A Queen!'},
                {id: 7, name: 'Eru Thingol', avatar: '/avatar2.jpg', passed: 'an hour ago', message: 'Even The Smallest Person Can Change The Course Of The Future.'},
                {id: 8, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', message: 'May It Be A Light For You In Dark Places, When All Other Lights Go Out.'},
                {id: 9, name: 'Yngve', avatar: '/avatar4.jpg', passed: 'Yesterday', message: 'Do We Leave Middle-Earth To Its Fate? Do We Let Them Stand Alone?'},
                {id: 10, name: 'Lúthien Tinuviel', avatar: '/avatar5.jpg', passed: '2 days ago', message: 'You Have No Power Here, Servant Of Morgoth! You Are Nameless! Faceless! Formless! Go Back To The\n' +
                        '                    Void From Whence You Came!'}
            ],
            myMessagesData: [
                {id: 1, name: 'Mirime', avatar: '/myAvatar.jpg', passed: 'a min ago', message: 'Do Not Be Afraid, Mithrandir. You Are Not Alone.'},
                {id: 2, name: 'Eru Thingol', avatar: '/myAvatar.jpg', passed: 'an hour ago', message: 'The Power Of The Three Rings Has Ended. The Time Has Come ... For The Dominion Of Men.'},
                {id: 3, name: 'Ancalime', avatar: '/myAvatar.jpg', passed: '13 hour ago', message: 'The World Is Changed.'},
                {id: 4, name: 'Yngve', avatar: '/myAvatar.jpg', passed: 'Yesterday', message: 'But The Hearts Of Men Are Easily Corrupted.'},
                {id: 5, name: 'Lúthien Tinuviel', avatar: '/myAvatar.jpg', passed: '2 days ago', message: 'The Quest Stands Upon The Edge Of A Knife.'},
                {id: 6, name: 'Mirime', avatar: '/myAvatar.jpg', passed: 'a min ago', message: 'In Place Of A Dark Lord You Would Have A Queen!'},
                {id: 7, name: 'Eru Thingol', avatar: '/myAvatar.jpg', passed: 'an hour ago', message: 'Even The Smallest Person Can Change The Course Of The Future.'},
                {id: 8, name: 'Ancalime', avatar: '/myAvatar.jpg', passed: '13 hour ago', message: 'May It Be A Light For You In Dark Places, When All Other Lights Go Out.'},
                {id: 9, name: 'Yngve', avatar: '/myAvatar.jpg', passed: 'Yesterday', message: 'Do We Leave Middle-Earth To Its Fate? Do We Let Them Stand Alone?'},
                {id: 10, name: 'Lúthien Tinuviel', avatar: '/myAvatar.jpg', passed: '2 days ago', message: 'You Have No Power Here, Servant Of Morgoth! You Are Nameless! Faceless! Formless! Go Back To The\n' +
                        '                    Void From Whence You Came!'}
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    /*addNewPost() {
        let newPost = {
            id: 4,
            name: 'Lúthien Tinuviel',
            avatar: '/avatar4.jpg',
            passed: 'a day ago',
            likesCount: 3,
            text: this._state.postsPage.newPostText,
            media: <img src="https://www.guinnessworldrecords.com/Images/Deadpool%20article%20main_tcm25-19980.jpg" alt=""/>
        };
        this._state.postsPage.PostData.push(newPost);
        this._state.postsPage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.postsPage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addNewComment() {
        let newComment = {
            id: 6,
            avatar: 'myAvatar.jpg',
            name: 'Mirime',
            text: this._state.postsPage.newCommentText
        };
        this._state.postsPage.commentsData.push(newComment);
        this._state.postsPage.newCommentText = '';
        this._callSubscriber(this._state);
    },
    updateNewCommentText(newText) {
        this._state.postsPage.newCommentText = newText;
        this._callSubscriber(this._state);
    },
    addNewMessage(messageData) {
        let newMessage = {
            id: 11,
            name: 'Mirime',
            avatar: '/myAvatar.jpg',
            passed: '3 hour ago',
            message: messageData
        };
        this._state.messagesPage.myMessagesData.push(newMessage);
        this._callSubscriber(this._state);
    },*/
    dispatch(action) {

        this._state.postsPage = postReducer(this._state.postsPage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);

        /*if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                name: 'Lúthien Tinuviel',
                avatar: '/avatar4.jpg',
                passed: 'a day ago',
                likesCount: 3,
                text: this._state.postsPage.newPostText,
                media: <img src="https://www.guinnessworldrecords.com/Images/Deadpool%20article%20main_tcm25-19980.jpg" alt=""/>
            };
            this._state.postsPage.PostData.push(newPost);
            this._state.postsPage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.postsPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-NEW-COMMENT') {
            let newComment = {
                id: 6,
                avatar: 'myAvatar.jpg',
                name: 'Mirime',
                text: this._state.postsPage.newCommentText
            };
            this._state.postsPage.commentsData.push(newComment);
            this._state.postsPage.newCommentText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-COMMENT-TEXT') {
            this._state.postsPage.newCommentText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            let newMessage = {
                id: 11,
                name: 'Mirime',
                avatar: '/myAvatar.jpg',
                passed: '3 hour ago',
                message: action.messageData
            };
            this._state.messagesPage.myMessagesData.push(newMessage);
            this._callSubscriber(this._state);
        }*/
    }

}

/*export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addCommentActionCreator = () => {
    return {
        type: ADD_NEW_COMMENT
    }
}

export const updateCommentActionCreator = (text) => {
    return {
        type: UPDATE_NEW_COMMENT_TEXT,
        newText: text
    }
}

export const addNewMessage = (text) => {
    return {
        type: ADD_NEW_MESSAGE,
        messageData: text
    }
}*/

export default store
window.store = store