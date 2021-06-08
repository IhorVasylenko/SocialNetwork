import React from "react";
import s from './MenuItemSubmenu.module.css';

const MenuItemSubmenu = (props) => {
    return (
        <div className={s.collapse}>
            <ul className={s.topmenu}>
                <li><a href="#">
                    Blog
                    <span>
                        <img src="./downIcon.png" alt=""/>
                    </span>
                </a>
                    <ul className={s.submenu}>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Companies</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Profiles</a>
                        </li>
                        {/*<li>*/}
                        {/*    <a href="#">Jobs</a>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                        {/*    <a href="#">Messages</a>*/}
                        {/*</li>*/}
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default MenuItemSubmenu