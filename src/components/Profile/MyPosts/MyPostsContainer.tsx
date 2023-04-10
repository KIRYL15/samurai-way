import React from 'react';
import {MyPosts} from "./MyPosts";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {PostsType} from "../../../redux/type";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
//import {StoreContext} from "../../../StoreContext";
// type MyPostsType = {
//     store:StoreType
// }
// export const MyPostsContainer
//     /*: React.FC<MyPostsType>*/ = (/*props*/) => {
//     // let state = props.store.getState()
//     // const addPosts = (postMessage: string) => {
//     //     props.store.dispatch(addPostAC(postMessage))
//     // }
//     // const onPostChange = (text: string) => {
//     //     props.store.dispatch(changeNewTextAC(text))
//     // }
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState()
//                 const addPosts = () => {
//                     store.dispatch(addPostAC())
//                 }
//                 const onPostChange = (text: string) => {
//                     store.dispatch(changeNewTextAC(text))
//                 }
//                 return (
//                     <MyPosts
//                         onPostChange={onPostChange}
//                         addPosts={addPosts}
//                         posts={state.profilePage.posts}
//                         newPostText={state.profilePage.newPostText}/>
//                 )
//             }}
//         </StoreContext.Consumer>
//     );
// };
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
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)