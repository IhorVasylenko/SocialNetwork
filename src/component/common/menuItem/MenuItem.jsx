import React from "react";
import s from './MenuItem.module.css';

const MenuItem = (props) => {
    return (
        <div className={s.collapse}>
            <ul className={s.topmenu}>
                <li>
                    <a href="#">
                        Home
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default MenuItem