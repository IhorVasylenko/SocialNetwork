import React from "react";
import s from './Profile.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";

const UserContentProfile = (props) => {
    return (
        <BrowserRouter>
            <nav>
                <div className={s.item}>
                    <NavLink to='/myPosts' activeClassName={s.activeLink}>MyPosts</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/messages' activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <a href='/news' activeClassName={s.activeLink}>news</a>
                </div>
                <div className={s.item}>
                    <a href='/projects' activeClassName={s.activeLink}>projects</a>
                </div>
                <div className={s.item}>
                    <a href='/music' activeClassName={s.activeLink}>music</a>
                </div>
                <div className={s.item}>
                    <a href='/videos' activeClassName={s.activeLink}>videos</a>
                </div>
                <div className={s.item}>
                    <a href='/images' activeClassName={s.activeLink}>images</a>
                </div>
                <div className={s.item}>
                    <a href='/settings' activeClassName={s.activeLink}>settings</a>
                </div>
            </nav>
        </BrowserRouter>
    )
}

export default UserContentProfile