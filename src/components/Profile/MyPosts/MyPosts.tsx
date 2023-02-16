import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let postData = [
        {numberOfLikes: 2, postTitle: 'Hi Friends'},
        {numberOfLikes: 33, postTitle: 'Hello World'},
        {numberOfLikes: 34, postTitle: 'Peace for everyone'},
        {numberOfLikes: 6, postTitle: 'Summer is coming'},
    ]
    return (
        <div className={style.postsBlock}><h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postData.map((m) => {
                    return (
                        <Post numberOfLikes={m.numberOfLikes} postTitle={m.postTitle}/>
                    )
                })}
            </div>
        </div>
    );
};