import {v1} from "uuid";
import {Dispatch} from "redux";
import {AppActionsTypes, AppThunk} from "./redux-store";
import {PhotoType, PostsType, profileAPI, ProfilePageType, ProfileType} from "../api/api";
import {stopSubmit} from "redux-form";

export type addPostAT = ReturnType<typeof addPostAC>
export type setUserProfileAT = ReturnType<typeof setUserProfileAC>
export type setUserStatusAT = ReturnType<typeof setUserStatusAC>
export type savePhotoSuccesAT = ReturnType<typeof savePhotoSuccesAC>


export type ProfileActionType = addPostAT | setUserProfileAT | setUserStatusAT | savePhotoSuccesAT
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
        case "SAVE-PHOTO-SUCCES":
            return {...state, profile: {...state.profile, photos: action.photos}}
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
export const savePhotoSuccesAC = (photos: PhotoType) => {
    return {
        type: "SAVE-PHOTO-SUCCES",
        photos
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
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setUserStatusAC(status))
        }
    } catch (error) {

    }
}

export const savePhotoThunkCreator = (file: File) => async (dispatch: Dispatch<ProfileActionType>) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccesAC(response.data.data.photos))
    }
}
export const saveProfileThunkCreator = (profile: ProfileType): AppThunk => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfileThunkCreator(userId))
    } else {
        let message = response.data.messages[0]
        dispatch(stopSubmit('edit-profile', {_error: message}))
        return Promise.reject(message)

    }
}