import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {PostsType} from "../../../redux/type";
import {AppStateType, store} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type MePostsPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    posts: Array<PostsType>,
    newPostText: string
}

type mapDispatchToPropsType = {
    onPostChange: (text: string) => void,
    addPosts: () => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPosts: () => {
            dispatch(addPostAC(store.getState().profilePage.newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)