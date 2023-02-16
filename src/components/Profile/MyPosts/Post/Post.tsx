import React from 'react';
import style from './Posts.module.css'
import avatar_user from '../Avatar_user.png'
type PostType={
    postTitle:string,
    numberOfLikes:number
}
export const Post = (props:PostType) => {
    return <div className={style.item}><img src={avatar_user} alt="avatar"/>
        {props.postTitle}
        <div>
            <span>{props.numberOfLikes}</span>
        </div>
    </div>
};