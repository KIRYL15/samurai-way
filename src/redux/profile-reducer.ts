import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType, ProfileType} from "./type";

export const ADD_POST = "ADD-POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
export const SET_USER_PROFILE = "SET-USER-PROFILE"
const initialState: ProfilePageType = {
    newPostText: '',
    posts: [
        {id: v1(), numberOfLikes: 2, postTitle: 'Hi Friends'},
        {id: v1(), numberOfLikes: 33, postTitle: 'Hello World'},
        {id: v1(), numberOfLikes: 34, postTitle: 'Peace for everyone'},
        {id: v1(), numberOfLikes: 6, postTitle: 'Summer is coming'},
    ],
    profile:{
        photos:{
            small:'',
            large:''
        }
    }
}

export const ProfileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: v1(),
                numberOfLikes: 0,
                postTitle: state.newPostText,
            };
            state = {...state, posts: [...state.posts, newPost]}
            state.newPostText = ""
            return state;
        case UPDATE_NEW_POST_TEXT:
            state = {...state, newPostText: action.newText}
            //state.newPostText = action.newText
            return state;
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST,
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

