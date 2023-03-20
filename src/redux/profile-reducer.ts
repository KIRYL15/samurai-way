import {ActionsTypes, PostsType, ProfilePageType} from "./store";


export const ADD_POST = "ADD-POST"
export const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"
const initialState: ProfilePageType = {
    newPostText: 'Новый пост',
    posts: [
        {id: 1, numberOfLikes: 2, postTitle: 'Hi Friends'},
        {id: 2, numberOfLikes: 33, postTitle: 'Hello World'},
        {id: 3, numberOfLikes: 34, postTitle: 'Peace for everyone'},
        {id: 4, numberOfLikes: 6, postTitle: 'Summer is coming'},
    ],
}
export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: 5,
                postTitle: action.newPostText,
                numberOfLikes: 0,
            };
            state.posts.push(newPost);
            state.newPostText = ""
            return state;
        case "CHANGE-NEW-TEXT":
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}


