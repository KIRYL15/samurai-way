import React from 'react';
import {Post} from "./Post/Post";
import style from './MyPosts.module.css';
import {PostsType,} from "../../../redux/type";
import {AddNewPostFormRedux} from "./AddNewPostForm";

type MyPostsType = {
    addPosts: (newPostText:string) => void
    posts: PostsType[]
}
export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.posts.map((data) =>
        <Post
            key={data.id}
            numberOfLikes={data.numberOfLikes}
            postTitle={data.postTitle}/>
    )
    const onAddPost = (values:any) => {
        props.addPosts(values.newPostText)
    }
    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={style.posts}>{postsElement}</div>
        </div>
    );
};