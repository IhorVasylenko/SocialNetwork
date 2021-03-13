import React from "react";
import s from './Header.module.css';
import LogoGoToIt from "../../common/logoIT/LogoGoToIt";
import Search from "../../common/search/Search";
import MenuItem from "../../common/menuItem/MenuItem";
import MenuItemSubmenu from "../../common/menuItemSubmenu/MenuItemSubmenu";
import {NavLink} from "react-router-dom";

const UserHeader = (props) => {
    return <header className={s.headerWrapper}>
            <nav className={`${s.navbar} ${s.menu}`}>
                <div className={s.container}>
                    <LogoGoToIt />
                    <Search />
                    <div className={s.menu}>
                        <MenuItem />
                        <MenuItemSubmenu />
                        <MenuItemSubmenu />
                        <MenuItemSubmenu />
                        <MenuItemSubmenu />
                        <MenuItem />
                        <div className={s.loginBlock}>
                            {props.isAuth
                                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                                : <NavLink to={'/login'}>Login</NavLink>}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
}

export default UserHeader
