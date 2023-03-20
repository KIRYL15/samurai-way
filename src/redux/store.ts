import {addPostAC, changeNewTextAC, ProfileReducer} from "./profile-reducer";
import {addMessageAC, changeMessageBodyAC, DialogsReducer} from "./dialogs-reducer";

export type AppStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
};
export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string,
};
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageBody: string
};
export type PostsType = {
    id: number,
    numberOfLikes: number,
    postTitle: string
};
export type DialogsType = {
    id: number,
    name: string
};
export type MessagesType = {
    id: number,
    message: string,

};
export type StoreType = {
    _state: AppStateType,
    _rerenderEntireTree: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => AppStateType,
    dispatch: (action: ActionsTypes) => void
};
export type ActionsTypes =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeMessageBodyAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>


export const store: StoreType = {
    //state свойство объекта store, типизировать свойство нельзя
    _state: {
        profilePage: {
            newPostText: 'Новый пост',
            posts: [
                {id: 1, numberOfLikes: 2, postTitle: 'Hi Friends'},
                {id: 2, numberOfLikes: 33, postTitle: 'Hello World'},
                {id: 3, numberOfLikes: 34, postTitle: 'Peace for everyone'},
                {id: 4, numberOfLikes: 6, postTitle: 'Summer is coming'},
            ],

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
            newMessageBody: "New message",
        },
    },
    _rerenderEntireTree() {
        console.log('Render store')
    },

    subscribe(callback) {
        this._rerenderEntireTree = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree()
    }
}
