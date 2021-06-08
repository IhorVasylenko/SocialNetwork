import React from "react";
import s from './ImagesItem.module.css';

const UserContentWallImagesItem = (props) => {
    return (
        <div>
            <div className={s.element}>
                <img src={props.image} alt=""/>
                <div className={s.shirt}>
                    <div className={s.shirtWrapper}>
                        <div className={s.header}>
                            <div className={s.headerLeft}>
                                <a href="#">{props.folder}</a>
                            </div>
                            <div className={s.headerRight}>
                                <a href="#">Save</a>
                            </div>
                        </div>
                        <div className={s.footer}>
                            <a className={s.footerLeft} href="#">{props.url}</a>
                            <div className={s.footerRight}>
                                <a href="">
                                    <img src='uploadIcon.png' alt=""/>
                                </a>
                                <a href="">
                                    <img src='moreIcon.png' alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.informations}>
                {props.informations}
            </div>
            <a className={s.author} href="#">
                <div className={s.avatar}>
                    <img src={props.avatar} alt=""/>
                </div>
                <div className={s.name}>
                    {props.name}
                </div>
            </a>
        </div>
    )
}

export default UserContentWallImagesItem
