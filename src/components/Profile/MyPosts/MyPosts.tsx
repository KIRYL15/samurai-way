import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType, StoreType} from "../../../redux/state";

type MyPostsType = {
    store:StoreType
    postData: PostsType[],
    addPost:(postMessage: string) => void,
    changeNewText:(newText: string)=>void
}
export const MyPosts = (props: MyPostsType) => {
    let postsElement = props.postData.map((data, index) =>
        <Post
            key={index}
            numberOfLikes={data.numberOfLikes}
            postTitle={data.postTitle}
        />
    )
    let onClickHandler = () => {
       props.addPost(props.store._state.profilePage.newPostText)
    }
    let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>)=>
        props.changeNewText(e.currentTarget.value)
    return (
        <div className={style.postsBlock}><h2>My posts</h2>
            <div>
                {props.store._state.profilePage.newPostText}
                <div>
                    <textarea
                        value={props.store._state.profilePage.newPostText}
                        onChange={onChangeHandler}
                    />
                </div>
                <div>
                    <button onClick={onClickHandler}>Add post
                    </button>
                </div>
            </div>
            <div className={style.posts}>{postsElement}</div>
        </div>
    );
};