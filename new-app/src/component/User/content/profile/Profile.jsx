import React from "react";
import s from './Profile.module.css';
import Follow from "../follow/Follow";
import PreLoader from "../../../common/preLoader/preLoader";
import ProfileStatus from "../../../common/status/ProfileStatus";

const UserContentProfile = (props) => {
    if (!props.profile) {
        return <PreLoader />
    }
    return (
        <div className={s.wrapper}>
            <div className={s.backgroundImage} style={
                {backgroundImage: 'url(https://uapo.org.ua/wp-content/uploads/2019/07/year-end-ai.jpg)'}}>
                <div className={s.profileMenu}>
                    <div className={s.avatarContainer}>
                        <img src={props.profile.photos.small != null ? props.profile.photos.small : '/noPhotoAvatar.png'} alt=""/>
                    </div>
                    <div className={s.placeHolders}>
                        <a href='#'>news</a>
                        <a href='#'>portfolio</a>
                        <a href='#'>album</a>
                        <a href='#'>frainds</a>
                    </div>
                    <button>unfollow</button>
                </div>
                <div className={s.footer}>
                    <div className={s.preferencesDate}>
                        <div className={s.followerDate}>
                            <div className={s.followerItem}>
                                <span>following</span>
                                <span className={s.value}>33</span>
                            </div>
                            <div className={s.followerItem}>
                                <span>followers</span>
                                <span className={s.value}>77</span>
                            </div>
                        </div>
                        <div className={s.socialsDate}>
                            <a href={props.profile.contacts.facebook != null ? props.profile.contacts.facebook : 'https://uk-ua.facebook.com'}>
                                <img src="/facebook.png" alt=""/>
                                <p>{props.profile.contacts.facebook != null ? props.profile.contacts.facebook : 'https://uk-ua.facebook.com'}</p>
                            </a>
                            <a href={props.profile.contacts.instagram != null ? props.profile.contacts.instagram : 'https://instagram-my.ru/'}>
                                <img src="/instagram.png" alt=""/>
                                <p>{props.profile.contacts.instagram != null ? props.profile.contacts.instagram : 'https://instagram-my.ru/'}</p>
                            </a>
                            <a href={props.profile.contacts.github != null ? props.profile.contacts.github : 'https://www.pinterest.com/'}>
                                <img src="/pinterest.png" alt=""/>
                                <p>{props.profile.contacts.github != null ? props.profile.contacts.github : 'https://www.pinterest.com/'}</p>
                            </a>
                            <a href={props.profile.contacts.website != null ? props.profile.contacts.website : 'https://web.telegram.org/'}>
                                <img src="/telegram.png" alt=""/>
                                <p>{props.profile.contacts.website != null ? props.profile.contacts.website : 'https://web.telegram.org/'}</p>
                            </a>
                            <a href={props.profile.contacts.twitter != null ? props.profile.contacts.twitter : 'https://twitter.com/'}>
                                <img src="/twitter.png" alt=""/>
                                <p>{props.profile.contacts.twitter != null ? props.profile.contacts.twitter : 'https://twitter.com/'}</p>
                            </a>
                            <a href={props.profile.contacts.youtube != null ? props.profile.contacts.youtube : 'https://www.youtube.com/'}>
                                <img src="/youtube.png" alt=""/>
                                <p>{props.profile.contacts.youtube != null ? props.profile.contacts.youtube : 'https://www.youtube.com/'}</p>
                            </a>
                        </div>
                    </div>
                    <div className={s.profileDate}>
                        <span className={s.profileName}>{props.profile.fullName != null ? props.profile.fullName : 'noname'}</span>
                        <span className={s.country}>
                            <span>Ukraine</span>
                            <span>Kiev</span>
                        </span>
                        <span className={s.status}>
                            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                        </span>
                    </div>
                </div>
            </div>
            <Follow />
        </div>
    )
}

export default UserContentProfile




//my date
/*
const UserContentProfile = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.backgroundImage} style={
                {backgroundImage: 'url(https://uapo.org.ua/wp-content/uploads/2019/07/year-end-ai.jpg)'}}>
                <div className={s.profileMenu}>
                    <div className={s.avatarContainer}>
                        <img src='./myAvatar.jpg' alt=""/>
                    </div>
                    <div className={s.placeHolders}>
                        <a href='#'>news</a>
                        <a href='#'>portfolio</a>
                        <a href='#'>album</a>
                        <a href='#'>frainds</a>
                    </div>
                    <button>unfollow</button>
                </div>
                <div className={s.footer}>
                    <div className={s.preferencesDate}>
                        <div className={s.followerDate}>
                            <div className={s.followerItem}>
                                <span>following</span>
                                <span className={s.value}>33</span>
                            </div>
                            <div className={s.followerItem}>
                                <span>followers</span>
                                <span className={s.value}>77</span>
                            </div>
                        </div>
                        <div className={s.socialsDate}>
                            <a href="">
                                <img src="/facebook.png" alt=""/>
                                <p>https://uk-ua.facebook.com/</p>
                            </a>
                            <a href="">
                                <img src="/instagram.png" alt=""/>
                                <p>https://instagram-my.ru/</p>
                            </a>
                            <a href="">
                                <img src="/pinterest.png" alt=""/>
                                <p>https://www.pinterest.com/</p>
                            </a>
                            <a href="">
                                <img src="/telegram.png" alt=""/>
                                <p>https://web.telegram.org/</p>
                            </a>
                            <a href="">
                                <img src="/twitter.png" alt=""/>
                                <p>https://twitter.com/</p>
                            </a>
                            <a href="">
                                <img src="/youtube.png" alt=""/>
                                <p>https://www.youtube.com/</p>
                            </a>
                        </div>
                    </div>
                    <div className={s.profileDate}>
                        <span className={s.profileName}>Ihor Vasylenko</span>
                        <span className={s.country}>
                            <span>Ukraine</span>
                            <span>Kiev</span>
                        </span>
                        <span className={s.status}>Load up on guns and bring your friends.
                            <br />It's fun to lose and to pretend.
                            <br />She's over-bored and self-assured.
                            <br />Oh no, I know a dirty word.</span>
                    </div>
                </div>
            </div>
            <div className={s.follow}>
                <Follow />
            </div>
        </div>
    )
}*/
