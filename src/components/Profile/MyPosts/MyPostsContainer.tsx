import React from 'react';
import {MyPosts} from "./MyPosts";
import {StoreType,} from "../../../redux/type";
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";

type MyPostsType = {
    store:StoreType
}
export const MyPostsContainer: React.FC<MyPostsType> = (props) => {

    let state=props.store.getState()
    const addPosts = (postMessage:string) => {
        props.store.dispatch(addPostAC(postMessage))
    }
    const onPostChange = (text:string) => {
        props.store.dispatch(changeNewTextAC(text))
    }

    return (
        <MyPosts
            onPostChange={onPostChange}
            addPosts={addPosts}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    );
    
};