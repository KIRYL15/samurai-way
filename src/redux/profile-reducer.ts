import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType, ProfileType} from "./type";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
export const SET_USER_PROFILE = "SET-USER-PROFILE"
export const SET_STATUS = "SET-STATUS"
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

export const ProfileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: v1(),
                numberOfLikes: 0,
                postTitle: action.postMessage,
            };
            /* state = {...state, posts: [...state.posts, newPost]}
             state.newPostText = ""*/
            return {...state, posts: [...state.posts, newPost], newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            state = {...state, newPostText: action.newText}
            //state.newPostText = action.newText
            return state;
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }
}

export const addPostAC = (postMessage: string) => {
    return {
        type: ADD_POST,
        postMessage
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText
    } as const
}
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const setUserStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
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