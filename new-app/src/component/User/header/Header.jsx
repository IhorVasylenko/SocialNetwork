import React from "react";
import s from './Header.module.css';
import LogoGoToIt from "../../UI/logoIT/LogoGoToIt";
import Search from "../../UI/search/Search";
import MenuItem from "../../UI/menuItem/MenuItem";
import MenuItemSubmenu from "../../UI/menuItemSubmenu/MenuItemSubmenu";

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
                    </div>
                </div>
            </nav>
        </header>
}

export default UserHeader