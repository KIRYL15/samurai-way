import {Post} from "./Post/Post";
import style from './MyPosts.module.css';
import React, {ChangeEvent} from 'react';
import {PostsType,} from "../../../redux/type";

type MyPostsType = {
    onPostChange: (text: string) => void
    addPosts: (postMessage: string) => void
    posts: PostsType[]
    newPostText: string
    //postData: ProfilePageType,
    //dispatch: (action: ActionsTypes) => void
}
export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.posts.map((data) =>
        <Post
            key={data.id}
            numberOfLikes={data.numberOfLikes}
            postTitle={data.postTitle}/>
    )
    const addPost = () => {
        let postMessage = props.newPostText
        props.addPosts(postMessage)
    }
    /*props.dispatch(addPostAC(props.postData.newPostText))*/
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)
        /*props.dispatch(changeNewTextAC(e.currentTarget.value))*/
    }
    return (
        <div className={style.postsBlock}>
            <h2>My posts</h2>
            <div>
                <textarea
                    placeholder={"Напиши новый пост"}
                    value={props.newPostText}
                    onChange={onPostChange}/>
                <button
                    onClick={addPost}>Add post
                </button>
            </div>
            <div className={style.posts}>{postsElement}</div>
        </div>
    );
};