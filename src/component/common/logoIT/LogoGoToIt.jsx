import React from "react";
import s from './LogoGoToIt.module.css';

const LogoGoToIt = (props) => {
    return (
        <div>
            <a href="">
                <img className={s.logo} src="newLogoIt.jpg" alt=""/>
            </a>
        </div>
    )
}

export default LogoGoToIt