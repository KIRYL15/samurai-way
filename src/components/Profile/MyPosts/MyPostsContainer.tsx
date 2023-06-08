import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostsType} from "../../../api/api";

export type MePostsPropsType = mapStateToPropsType & mapDispatchToPropsType
type mapStateToPropsType = {
    posts: Array<PostsType>,
    newPostText: string
}

type mapDispatchToPropsType = {
    addPosts: (newPostText:string) => void
}
let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPosts: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}
//Над компонентой MyPosts создается контейнерная компонента, а внутри контейнерной написан код который
// обращается к стору, подписывается на него, берет стейт, засовывает стейт в функцию mapStateToProps,
// чтобы конкретно понять что из этого нужно нашей компоненте, заием сравнивает данные которые уже есть
// и если данные изменились компонента перерисовается, также и происходит с mapDispatchToProps. Так
// работает connect
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)