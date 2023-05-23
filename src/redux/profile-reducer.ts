import {v1} from "uuid";
import {Dispatch} from "redux";
import {AppActionsTypes} from "./redux-store";
import {PostsType, profileAPI, ProfilePageType, ProfileType} from "../api/api";

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
    return {
        type: "SET-STATUS",
        status
    } as const
}

export const getUserProfileThunkCreator = (userId: null | number) => async (dispatch: Dispatch<ProfileActionType>) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data));
}
export const getUserStatusThunkCreator = (userId: null | number) => async (dispatch: Dispatch<ProfileActionType>) => {
    let response = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatusAC(response.data));
}
export const updateStatusThunkCreator = (status: string) => async (dispatch: Dispatch<ProfileActionType>) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}