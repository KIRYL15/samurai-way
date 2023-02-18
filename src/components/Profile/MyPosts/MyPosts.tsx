import React from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsType = {
    postData: postDataType[]
}
type postDataType = {
    numberOfLikes: number,
    postTitle: string
}
export const MyPosts = (props: MyPostsType) => {
    // let postData = [
    //     {numberOfLikes: 2, postTitle: 'Hi Friends'},
    //     {numberOfLikes: 33, postTitle: 'Hello World'},
    //     {numberOfLikes: 34, postTitle: 'Peace for everyone'},
    //     {numberOfLikes: 6, postTitle: 'Summer is coming'},
    // ]
    let postsElement = props.postData.map((data) =>
        <Post numberOfLikes={data.numberOfLikes} postTitle={data.postTitle}/>)
    let onClickHandler=()=>{
        alert('Samyrai TS')
    }

    return (
        <div className={style.postsBlock}><h2>My posts</h2>
            <div>
                <div><textarea onChange={()=>{}}></textarea></div>
                <div>
                    <button onClick={onClickHandler}>Add post
                    </button>
                </div>
            </div>
            <div className={style.posts}>{postsElement}</div>
        </div>
    );
};