import React from "react";
import s from './AddFriends.module.css';

const UserContentAddFriends = (props) => {

    if(props.usersData.length === 0) {
        props.setUsers( [
        {id: 1, avatar: 'avatar1.jpg', name: 'Carl Johnson', status: 'You picked the wrong house, fool!',
            followers: 999, followed: true, location: {city: 'Kyiv', country: 'Ukraine'} },
        {id: 2, avatar: 'avatar2.jpg',name: 'Frank Tenpenny', status: 'Like it says in the book...',
            followers: 18, followed: false, location: {city: 'Minsk', country: 'Belarus'} },
        {id: 3, avatar: 'avatar3.jpg',name: 'Big Smoke', status: ' All we had to do was follow the damn train, CJ!',
            followers: 500, followed: true, location: {city: 'Moscow', country: 'Russia'} },
        {id: 4, avatar: 'avatar4.jpg',name: 'Sweet', status: 'You picked the wrong house, fool!',
            followers: 50, followed: false, location: {city: 'Kyiv', country: 'Ukraine'} },
        {id: 5, avatar: 'avatar5.jpg',name: 'Ryder', status: 'Like it says in the book...',
            followers: 8, followed: true, location: {city: 'Minsk', country: 'Belarus'} },
        {id: 6, avatar: 'avatar1.jpg',name: 'Cesar Vialpando', status: ' All we had to do was follow the damn train, CJ!',
            followers: 9, followed: false, location: {city: 'Moscow', country: 'Russia'} },
        {id: 7, avatar: 'avatar2.jpg',name: 'Catalina', status: 'You picked the wrong house, fool!',
            followers: 1, followed: true, location: {city: 'Kyiv', country: 'Ukraine'} },
        {id: 8, avatar: 'avatar3.jpg',name: 'The Truth', status: 'Like it says in the book...',
            followers: 33, followed: false, location: {city: 'Minsk', country: 'Belarus'} },
        {id: 9, avatar: 'avatar4.jpg',name: 'Mike Toreno', status: ' All we had to do was follow the damn train, CJ!',
            followers: 177, followed: true, location: {city: 'Moscow', country: 'Russia'} }
        ]
    )}

    return (
        <div className={s.wrapper}>
            {
                props.usersData.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.avatar} alt=""/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.city}
                        </div>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.followers}
                        </div>
                    </span>
                </span>
                    </div>
                )}
        </div>
    )
};

export default UserContentAddFriends