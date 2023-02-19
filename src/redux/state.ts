import {rerenderEntireTree} from "../render";

export type AppStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}
export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string,
}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
}
export type PostsType = {
    id: number,
    numberOfLikes: number,
    postTitle: string
}
export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}

export let state: AppStateType = {

    profilePage: {

        posts: [
            {id: 1, numberOfLikes: 2, postTitle: 'Hi Friends'},
            {id: 2, numberOfLikes: 33, postTitle: 'Hello World'},
            {id: 3, numberOfLikes: 34, postTitle: 'Peace for everyone'},
            {id: 4, numberOfLikes: 6, postTitle: 'Summer is coming'},
        ],

        newPostText: 'эээ',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Lui',},
            {id: 2, name: 'Endi',},
            {id: 3, name: 'Bob',},
            {id: 4, name: 'Monika',},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How is your'},
            {id: 3, message: 'Hi-hi'},
        ],
    },

}
//window.state=state
export let addPost = () => {
    debugger
    const newPost: PostsType = {
        id: 5,
        //postTitle: postMessage,
        postTitle: state.profilePage.newPostText,
        numberOfLikes: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='' //зануление поля ввода после добавления поста
    rerenderEntireTree(state)
}
export const changeNewText=(newText:string)=>{
    debugger
    state.profilePage.newPostText= newText
    rerenderEntireTree(state)

}

