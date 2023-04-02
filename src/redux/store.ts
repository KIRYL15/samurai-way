import {v1} from "uuid";
import {StoreType} from "./type";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
/*export const store: StoreType = {

    //state свойство объекта store, типизировать свойство нельзя
  /!*  _state: {
        profilePage: {
            newPostText: 'Новый пост',
            posts: [
                {id: v1(), numberOfLikes: 2, postTitle: 'Hi Friends'},
                {id: v1(), numberOfLikes: 33, postTitle: 'Hello World'},
                {id: v1(), numberOfLikes: 34, postTitle: 'Peace for everyone'},
                {id: v1(), numberOfLikes: 6, postTitle: 'Summer is coming'},
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Lui',},
                {id: v1(), name: 'Endi',},
                {id: v1(), name: 'Bob',},
                {id: v1(), name: 'Monika',},
            ],
            messages: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'How is your'},
                {id: v1(), message: 'Hi-hi'},
            ],
            newMessageBody: "",
        },
    },*!/
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
}*/
