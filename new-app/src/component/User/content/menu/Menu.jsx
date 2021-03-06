import React from "react";
import s from './Menu.module.css';
import {NavLink} from "react-router-dom";

const UserContentMenu = (props) => {
    return (
            <nav>
                <div className={s.item}>
                    <NavLink to='/myPosts' activeClassName={s.activeLink}>MyPosts</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/messages' activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/images' activeClassName={s.activeLink}>Images</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/addFriends' activeClassName={s.activeLink}>AddFriends</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <a href='/music' activeClassName={s.activeLink}>music</a>
                </div>
                <div className={s.item}>
                    <a href='/settings' activeClassName={s.activeLink}>settings</a>
                </div>
            </nav>
    )
}

export default UserContentMenu