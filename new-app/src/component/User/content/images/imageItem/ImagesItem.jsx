import React from "react";
import s from './Images.module.css';

let imagesData = [
    {id: 1, image: 'https://miro.medium.com/max/640/1*QplTh3SL2Tvv6-kFHdik_Q.jpeg',folder: 'Mars',
        url: 'pinterest.com',informations: 'My first download image.', avatar: 'avatar1.img',name: 'IronMan' },
    {id: 2, image: 'https://www.indiewire.com/wp-content/uploads/2014/06/marvel-characters-that-could-be-movie.jpg',folder: 'Venus',
        url: 'facebook.com',informations: 'My second download image.', avatar: 'avatar2.img',name: 'Deadpool' },
    {id: 3, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS71BO6dwIQes6NMOJ7NMPPGnESaTtF6Ly5g&usqp=CAU',folder: 'Jupiter',
        url: 'vkontakte.com',informations: 'My third download image.', avatar: 'avatar3.img',name: 'Captain Marvel' },
    {id: 4, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqJrzo9FGaYnlvJITSissFTBbmvC5KNKvag&usqp=CAU',folder: 'Pluto',
        url: 'twitter.com',informations: 'My fourth download image.', avatar: 'avatar4.img',name: 'Wolverin' },
    {id: 5, image: 'https://i.ytimg.com/vi/Vz-L-rDGV-Q/maxresdefault.jpg',folder: 'Saturn',
        url: 'instagram.com',informations: 'My fifth download image.', avatar: 'avatar5.img',name: 'Spider-Man' },
    {id: 6, image: 'https://i.annihil.us/u/prod/marvel/i/mg/d/50/55084123775c2/clean.jpg',folder: 'Mars',
        url: 'pinterest.com',informations: 'My first download image.', avatar: 'avatar1.img',name: 'Deadpool' },
    {id: 7, image: 'https://churchm.ag/wp-content/uploads/2013/11/marvel_characters.jpg',folder: 'Venus',
        url: 'facebook.com',informations: 'My second download image.', avatar: 'avatar2.img',name: 'Captain Marvel' },
    {id: 8, image: 'https://i.insider.com/5ae8665719ee8650008b46cb?width=750&format=jpeg&auto=webp',folder: 'Jupiter',
        url: 'vkontakte.com',informations: 'My third download image.', avatar: 'avatar3.img',name: 'Wolverin' },
    {id: 9, image: 'https://www.fortressofsolitude.co.za/wp-content/uploads/2014/02/marvel-characters.jpg?width=1200&enable=upscale',folder: 'Pluto',
        url: 'twitter.com',informations: 'My fourth download image.', avatar: 'avatar4.img',name: 'IronMan' },
    {id: 10, image: 'https://res.cloudinary.com/jerrick/image/upload/c_scale,q_auto/kqrzaqmuxsuryayi3mpg.jpg',folder: 'Saturn',
        url: 'instagram.com',informations: 'My fifth download image.', avatar: 'avatar5.img',name: 'Spider-Man' }
];

const UserContentWallImages = (props) => {
    return (
        <div className={s.wrapper}>
            <div>
                <div className={s.element}>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=""/>
                    <div className={s.shirt}>
                        <div className={s.shirtWrapper}>
                            <div className={s.header}>
                                <div className={s.headerLeft}>
                                    <a href="#">Favorit</a>
                                </div>
                                <div className={s.headerRight}>
                                    <a href="#">Save</a>
                                </div>
                            </div>
                            <div className={s.footer}>
                                <a className={s.footerLeft} href="#">pinterest.com</a>
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
                    My first download image.
                </div>
                <a className={s.author} href="#">
                    <div className={s.avatar}>
                        <img src='avatar1.jpg' alt=""/>
                    </div>
                    <div className={s.name}>
                        IronMan
                    </div>
                </a>
            </div>

        </div>
    )
}

export default UserContentWallImages