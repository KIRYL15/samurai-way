import {Post} from "./Post/Post";
import style from './MyPosts.module.css';
import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostsType, } from "../../../redux/type";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import {store} from "../../../redux/redux-store";

type MyPostsType = {
    //store: StoreType,
    postData: PostsType[],
    dispatch: (action: ActionsTypes) => void
}
export const MyPosts: React.FC<MyPostsType> = (props) => {
    let postsElement = props.postData.map((data, index) =>
        <Post
            key={index}
            numberOfLikes={data.numberOfLikes}
            postTitle={data.postTitle}/>
    )
    let addPost = () => {
        //перевели на dispatch
        // props.dispatch({
        //     type: "ADD-POST",
        //     newPostText: props.store._state.profilePage.newPostText
        // })
        //const action = props.store._state.profilePage.newPostText
        props.dispatch(addPostAC(store._state.profilePage.newPostText))
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //перевели на dispatch
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    }
    return (

        <div className={style.postsBlock}><h2>My posts</h2>
            <div>
                <textarea
                    value={store._state.profilePage.newPostText}
                    onKeyDown={(e) => (e.key === "Enter" && addPost())}
                    onChange={onPostChange}/>
                <button
                    onClick={addPost}>Add post
                </button>
            </div>
            <div className={style.posts}>{postsElement}</div>
        </div>
    );
};