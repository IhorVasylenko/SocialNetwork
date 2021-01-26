import React from "react";
import s from './Post.module.css';

import UserContentWallMyPostsPostComment from "./comments/Comment";
impo

const PostItem = (props) => {
    return <div className={s.post}>
        <div className={s.header}>
            <img src={process.env.PUBLIC_URL + props.avatar} alt=""/>
            <div className={s.postInformations}>
                <div className={s.authorName}>
                    <a href="">{props.name}</a>
                </div>
                <div className={s.publicationDate}>
                    {props.passed}.
                </div>
            </div>
            <span className={s.likes}> {/*Иконка для лайков.*/}
                <div>
                    <img src="likeIcon.png" alt=""/>
                        </div>
                        <div className={s.likesCount}>
                            {props.likesCount}
                        </div>
                    </span>
        </div>
        <div className={s.text}>
            {props.text}
        </div>
        <UserContentWallMyPostsPostComment />
        <div className={s.addMyComent}>
            <img src="myAvatar.jpg" alt=""/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Add comment..."></textarea>
        </div>
    </div>
}



const MediaItem = (props) => {
    return <div className={s.addedMedia}>
        {props.media}
        {/**/}
    </div>
}




const ItemPost = (props) => {
    return <div className={s.wrapper}>
        <div>
            {props.media}
            {props.post}
        </div>
    </div>
}


const UserContentWallMyPostsPost = (props) => {
    let postElement = PostData.map( p => <PostItem id={p.id} name={p.name} avatar={p.avatar} passed={p.passed}
                                                   text={p.text} likesCount={p.likesCount} />);

    let mediaElement = MediaData.map( m => <MediaItem id={m.id} media={m.media} />)

    let dataPost = [
        {media: mediaElement[0], post: postElement[0]},
        {media: mediaElement[1], post: postElement[1]},
        {media: mediaElement[2], post: postElement[2]}
    ]
    let elementPost = dataPost.map( e => <ItemPost media={e.media} post={e.post} />)

    return (
        <div>
            {elementPost}
        </div>
    )
}

export default UserContentWallMyPostsPost
