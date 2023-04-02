import {Post} from "./Post/Post";
import style from './MyPosts.module.css';
import React, {ChangeEvent, KeyboardEvent} from 'react';
import {ActionsTypes, ProfilePageType,} from "../../../redux/type";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";

type MyPostsType = {
    postData: ProfilePageType,
    dispatch: (action: ActionsTypes) => void
}
export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.postData.posts.map((data) =>
        <Post
            key={data.id}
            numberOfLikes={data.numberOfLikes}
            postTitle={data.postTitle}/>
    )
    const addPost = () => props.dispatch(addPostAC(props.postData.newPostText))
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => props.dispatch(changeNewTextAC(e.currentTarget.value))
    const onKeyDownPost=(e:KeyboardEvent<HTMLTextAreaElement>)=>e.key === "Enter" && addPost()

    return (
        <div className={style.postsBlock}><h2>My posts</h2>
            <div>
                <textarea
                    placeholder={"Напиши новый пост"}
                    value={props.postData.newPostText}
                    onKeyDown={onKeyDownPost}
                    onChange={onPostChange}/>
                <button
                    onClick={addPost}>Add post
                </button>
            </div>
            <div className={style.posts}>{postsElement}</div>
        </div>
    );
};