import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType, ProfileType} from "./type";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type addPostAT = ReturnType<typeof addPostAC>
export type setUserProfileAT = ReturnType<typeof setUserProfileAC>
export type setUserStatusAT = ReturnType<typeof setUserStatusAC>


type ActionType = addPostAT | setUserProfileAT | setUserStatusAT
const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), numberOfLikes: 2, postTitle: 'Hi Friends'},
        {id: v1(), numberOfLikes: 33, postTitle: 'Hello World'},
        {id: v1(), numberOfLikes: 34, postTitle: 'Peace for everyone'},
        {id: v1(), numberOfLikes: 6, postTitle: 'Summer is coming'},
    ],
    profile: null,
    status: "",
}

export const ProfileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                numberOfLikes: 0,
                postTitle: action.newPostText,
            };
            /* state = {...state, posts: [...state.posts, newPost]}
             state.newPostText = ""*/
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        // case "UPDATE-NEW-POST-TEXT":
        //     state = {...state, newPostText: action.newText}
        //     //state.newPostText = action.newText
        //     return state;
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }
}
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}
// export const updateNewPostTextAC = (newText: string) => {
//     return {
//         type: "UPDATE-NEW-POST-TEXT",
//         newText
//     } as const
// }
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export const setUserStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}

export const getUserProfileThunkCreator = (userId: string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        })
}
export const getUserStatusThunkCreator = (userId: string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatusAC(response.data));
        })
}
export const updateStatusThunkCreator = (status: string) => (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
}