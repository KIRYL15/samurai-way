import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <div className={style.posts}>
                    <Post numberOfLikes={2} postTitle={'Hi Friends'}/>
                    <Post numberOfLikes={33} postTitle={'Hello World'}/>
                    <Post numberOfLikes={34} postTitle={'Peace for everyone'}/>
                    <Post numberOfLikes={6} postTitle={'Summer is coming'}/>
                    <Post numberOfLikes={5} postTitle={'Smile'}/>
                </div>
            </div>
        </div>
    );
};