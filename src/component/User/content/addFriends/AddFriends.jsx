import React from "react";
import s from './AddFriends.module.css';
import {NavLink} from "react-router-dom";


let UserContentAddFriends = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.wrapper}>
            {props.usersData.map(u =>
                <div key={u.id} className={s.container}>
                    <div>
                        <div className={s.profileAvatar}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : 'noPhotoAvatar.png'} alt=""/>
                            </NavLink>
                        </div>
                        <div className={s.buttonFollow}>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.follow(u.id);}}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfollow(u.id);}}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.textArea}>
                        <div className={s.profileName}>
                            {u.name != null ? u.name : 'noname'}
                        </div>
                        <div className={s.profileStatus}>
                            {u.status != null ? u.status : 'I\'m such a lazy asshole that I didn\'t write the status !!!'}
                        </div>
                    </div>
                </div>
            )}
            <div className={s.pagenation}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
        </div>
    )
}

/*if(props.usersData.length === 0) {
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
        )}*/

export default UserContentAddFriends


