const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

let initialState = {
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
        /*{id: 1, name: 'Mirime', avatar: '/avatar1.jpg', passed: 'a min ago', message: 'Do Not Be Afraid, Mithrandir. You Are Not Alone.'},
        {id: 2, name: 'Eru Thingol', avatar: '/avatar2.jpg', passed: 'an hour ago', message: 'The Power Of The Three Rings Has Ended. The Time Has Come ... For The Dominion Of Men.'},
        {id: 3, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', message: 'The World Is Changed.'},
        {id: 4, name: 'Yngve', avatar: '/avatar4.jpg', passed: 'Yesterday', message: 'But The Hearts Of Men Are Easily Corrupted.'},
        {id: 5, name: 'Lúthien Tinuviel', avatar: '/avatar5.jpg', passed: '2 days ago', message: 'The Quest Stands Upon The Edge Of A Knife.'},
        {id: 6, name: 'Mirime', avatar: '/avatar1.jpg', passed: 'a min ago', message: 'In Place Of A Dark Lord You Would Have A Queen!'},
        {id: 7, name: 'Eru Thingol', avatar: '/avatar2.jpg', passed: 'an hour ago', message: 'Even The Smallest Person Can Change The Course Of The Future.'},
        {id: 8, name: 'Ancalime', avatar: '/avatar3.jpg', passed: '13 hour ago', message: 'May It Be A Light For You In Dark Places, When All Other Lights Go Out.'},
        {id: 9, name: 'Yngve', avatar: '/avatar4.jpg', passed: 'Yesterday', message: 'Do We Leave Middle-Earth To Its Fate? Do We Let Them Stand Alone?'},
        {id: 10, name: 'Lúthien Tinuviel', avatar: '/avatar5.jpg', passed: '2 days ago', message: 'You Have No Power Here, Servant Of Morgoth! You Are Nameless! Faceless! Formless! Go Back To The\n' +
                '                    Void From Whence You Came!'}*/
    ],
    myMessagesData: [
       /* {id: 1, name: 'Mirime', avatar: '/myAvatar.jpg', passed: 'a min ago', message: 'Do Not Be Afraid, Mithrandir. You Are Not Alone.'},
        {id: 2, name: 'Eru Thingol', avatar: '/myAvatar.jpg', passed: 'an hour ago', message: 'The Power Of The Three Rings Has Ended. The Time Has Come ... For The Dominion Of Men.'},
        {id: 3, name: 'Ancalime', avatar: '/myAvatar.jpg', passed: '13 hour ago', message: 'The World Is Changed.'},
        {id: 4, name: 'Yngve', avatar: '/myAvatar.jpg', passed: 'Yesterday', message: 'But The Hearts Of Men Are Easily Corrupted.'},
        {id: 5, name: 'Lúthien Tinuviel', avatar: '/myAvatar.jpg', passed: '2 days ago', message: 'The Quest Stands Upon The Edge Of A Knife.'},
        {id: 6, name: 'Mirime', avatar: '/myAvatar.jpg', passed: 'a min ago', message: 'In Place Of A Dark Lord You Would Have A Queen!'},
        {id: 7, name: 'Eru Thingol', avatar: '/myAvatar.jpg', passed: 'an hour ago', message: 'Even The Smallest Person Can Change The Course Of The Future.'},
        {id: 8, name: 'Ancalime', avatar: '/myAvatar.jpg', passed: '13 hour ago', message: 'May It Be A Light For You In Dark Places, When All Other Lights Go Out.'},
        {id: 9, name: 'Yngve', avatar: '/myAvatar.jpg', passed: 'Yesterday', message: 'Do We Leave Middle-Earth To Its Fate? Do We Let Them Stand Alone?'},
        {id: 10, name: 'Lúthien Tinuviel', avatar: '/myAvatar.jpg', passed: '2 days ago', message: 'You Have No Power Here, Servant Of Morgoth! You Are Nameless! Faceless! Formless! Go Back To The\n' +
                '                    Void From Whence You Came!'}*/
    ]
};

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 11,
                name: 'Mirime',
                avatar: '/myAvatar.jpg',
                passed: '3 hour ago',
                message: action.newMessageText
            };
            return {
                ...state,
                myMessagesData: [...state.myMessagesData, newMessage]
            }

        default:
            return state;
    }
}

export const addNewMessage = (newMessageText) => {
    return {
        type: ADD_NEW_MESSAGE,
        newMessageText
    }
}

export default messageReducer;