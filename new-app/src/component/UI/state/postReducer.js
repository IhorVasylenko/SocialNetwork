
const ADD_POST = 'ADD-POST';
const ADD_NEW_COMMENT = 'ADD-NEW-COMMENT';

let initialState = {
    commentsData: [
        /*{id: 1, avatar: 'avatar1.jpg', name: 'Gandalf Gray', text: 'Why is it that people who can\'t take advice always insist on giving it ?'},
        {id: 2, avatar: 'avatar2.jpg', name: 'Bilbo Buggins', text: 'Why is it that people who can\'t take advice always insist on giving it ?'},
        {id: 3, avatar: 'avatar3.jpg', name: 'Gollum', text: 'Why is it that people who can\'t take advice always insist on giving it ?'},
        {id: 4, avatar: 'avatar4.jpg', name: 'Aragon', text: 'Why is it that people who can\'t take advice always insist on giving it ?'},
        {id: 5, avatar: 'avatar5.jpg', name: 'Legolas', text: 'Why is it that people who can\'t take advice always insist on giving it ?'}*/
    ],
    PostData: [
        /*{id: 1, name: 'Mirime', avatar: '/avatar1.jpg', passed: 'a min ago', likesCount: 7, text:
        "A long time ago, in a galaxy far, far away... It is a period of civil war. Rebel spaceships," +
                "striking from a hidden base, have won their first victory against the evil Galactic Empire." +
                "During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon," +
                "the Death Star, an armored space station with enough power to destroy an entire planet." +
                "Pursued by the Empires sinister agents, Princess Leia races home aboard her starship," +
                "that can save her people and restore freedom to the galaxy....", media:
                <img src="https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/05/mrb-eb33.jpg?quality=90&strip=all&zoom=1&resize=644%2C338&ssl=1" alt=""/>},
        {id: 2, name: 'Eru Thingol', avatar: '/avatar2.jpg', passed: 'an hour ago', likesCount: 11, text:
        "A long time ago, in a galaxy far, far away... It is a period of civil war. Rebel spaceships," +
                "striking from a hidden base, have won their first victory against the evil Galactic Empire." +
                "During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon," +
                "the Death Star, an armored space station with enough power to destroy an entire planet." +
                "Pursued by the Empires sinister agents, Princess Leia races home aboard her starship," +
                "that can save her people and restore freedom to the galaxy....", media:
                <img src="https://m.mrpickles.cn-fan.tv/images/characters.png" alt=""/>},
        {id: 3, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', likesCount: 29, text:
        "A long time ago, in a galaxy far, far away... It is a period of civil war. Rebel spaceships," +
                "striking from a hidden base, have won their first victory against the evil Galactic Empire." +
                "During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon," +
                "the Death Star, an armored space station with enough power to destroy an entire planet." +
                "Pursued by the Empires sinister agents, Princess Leia races home aboard her starship," +
                "that can save her people and restore freedom to the galaxy....", media:
                <img src="https://img.nbc.com/sites/nbcunbc/files/images/2019/4/02/Futurama-Web-DynamicLead-Desktop-1920x1080.jpg" alt=""/>}*/
    ]
};

const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                name: 'Ihor Vasylenko',
                avatar: 'myAvatar.jpg',
                passed: 'a day ago',
                likesCount: 3,
                text: action.newMessageText,
                media: <img src="https://www.guinnessworldrecords.com/Images/Deadpool%20article%20main_tcm25-19980.jpg" alt=""/>
            };
            return {
                ...state,
                PostData: [...state.PostData, newPost]
            }

        case ADD_NEW_COMMENT:
            let newComment = {
                id: 6,
                avatar: 'myAvatar.jpg',
                name: 'Ihor Vasylenko',
                text: action.newCommentText
            };
            return {
                ...state,
                commentsData: [...state.commentsData, newComment]
            }

        default:
            return state;
    }
}

export const addPost = (newMessageText) => {
    return {
        type: ADD_POST,
        newMessageText
    }
}

export const addComment = (newCommentText) => {
    return {
        type: ADD_NEW_COMMENT,
        newCommentText
    }
}

export default postReducer;