import {addMessageAC, changeMessageBodyAC} from "./dialogs-reducer";
import {addPostAC, changeNewTextAC} from "./profile-reducer";

export type AppStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
}
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
    id: string,
    numberOfLikes: number,
    postTitle: string
};
export type DialogsType = {
    id: string,
    name: string
};
export type MessagesType = {
    id: string,
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