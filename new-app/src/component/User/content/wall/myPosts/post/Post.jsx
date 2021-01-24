import React from "react";
import s from './Post.module.css';

import UserContentWallMyPostsPostComment from "./comments/Comment";


const UserContentWallMyPostsPost = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.addedMedia}>
                <img src="https://v-2021.org/_pu/2/78690558.jpg" alt=""/>
            </div>
            <div className={s.post}>
                <div className={s.header}>
                    <img src="avatar1.jpg" alt=""/>
                    <div className={s.postInformations}>
                        <div className={s.authorName}>
                            <a href="">Zhanneta Kitty</a>
                        </div>
                        <div className={s.publicationDate}>
                            Published 1 hour ago.
                        </div>
                    </div>
                    <span className={s.likes}> {/*Иконка для лайков.*/}
                        <div>
                            <img src="likeIcon.png" alt=""/>
                        </div>
                        <div className={s.likesCount}>
                            3
                        </div>
                    </span>
                </div>
                <div className={s.text}>A long time ago, in a galaxy far, far away...
                    It is a period of civil war. Rebel
                    spaceships, striking from a hidden
                    base, have won their first victory
                    against the evil Galactic Empire.
                    During the battle, Rebel spies managed
                    to steal secret plans to the Empire's
                    ultimate weapon, the Death Star, an
                    armored space station with enough
                    power to destroy an entire planet.
                    Pursued by the Empire's sinister agents,
                    Princess Leia races home aboard her
                    starship, custodian of the stolen plans
                    that can save her people and restore
                    freedom to the galaxy....</div>
                <UserContentWallMyPostsPostComment />
                <UserContentWallMyPostsPostComment />
                <div className={s.addMyComent}>
                    <img src="myAvatar.jpg" alt=""/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Add comment..."></textarea>
                </div>
            </div>
        </div>
    )
}

export default UserContentWallMyPostsPost