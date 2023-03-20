import {Post} from "./Post/Post";
import style from './MyPosts.module.css';
import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostsType, StoreType} from "../../../redux/store";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";

type MyPostsType = {
    store: StoreType,
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
    let onClickHandler = () => {
        //перевели на dispatch
        // props.dispatch({
        //     type: "ADD-POST",
        //     newPostText: props.store._state.profilePage.newPostText
        // })
        props.dispatch(addPostAC(props.store._state.profilePage.newPostText))
        //props.addPost(props.store._state.profilePage.newPostText)
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) =>
        //перевели на dispatch
        props.dispatch(changeNewTextAC(e.currentTarget.value))
    //props.changeNewText(e.currentTarget.value)
    return (
        <div className={style.postsBlock}><h2>My posts</h2>
            <div>
                <textarea
                    value={props.store._state.profilePage.newPostText}
                    onChange={onChangeHandler}/>
                <button
                    onClick={onClickHandler}>Add post
                </button>
            </div>
            <div className={style.posts}>{postsElement}</div>
        </div>
    );
};