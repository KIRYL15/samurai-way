import {v1} from "uuid";
import {Dispatch} from "redux";
import {PostsType, profileAPI, ProfilePageType, ProfileType} from "../api/api";
import {AppActionsTypes} from "./redux-store";

export type addPostAT = ReturnType<typeof addPostAC>
export type setUserProfileAT = ReturnType<typeof setUserProfileAC>
export type setUserStatusAT = ReturnType<typeof setUserStatusAC>


export type ProfileActionType = addPostAT | setUserProfileAT | setUserStatusAT
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

export const ProfileReducer = (state = initialState, action: AppActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                numberOfLikes: 0,
                postTitle: action.newPostText,
            };
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS":
            debugger
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
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export const setUserStatusAC = (status: string) => {
    debugger
    return {
        type: "SET-STATUS",
        status
    } as const
}

export const getUserProfileThunkCreator = (userId: null | number) => (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data));
        })
}
export const getUserStatusThunkCreator = (userId: null | number) => (dispatch: Dispatch<ProfileActionType>) => {
    profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatusAC(response.data));
        })
}
export const updateStatusThunkCreator = (status: string) => (dispatch: Dispatch<ProfileActionType>) => {
    debugger
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
}