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
    changeNewText: (newText: string) => void,
    addPost: () => void,
    _rerenderEntireTree: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => AppStateType,
    dispatch: (action: ActionsTypes) => void
};
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeMessageBodyAC>;
const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE-NEW-TEXT"
const NEW_MESSAGE_BODY = "NEW-MESSAGE-BODY"
const ADD_MESSAGE = "ADD_MESSAGE"
// type AddPostActionType = ReturnType<typeof addPostAC>
// type ChangeNewTextType = ReturnType<typeof changeNewTextAC>
// type AddPostActionType = {
//     type: "ADD-POST",
//     newPostText: string
// }
/*type ChangeNewTextType = {
    type: "CHANGE_NEW_TEXT",
    newText: string
}*/

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

    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },
    addPost() {
        const newPost: PostsType = {
            id: 5,
            postTitle: this._state.profilePage.newPostText,
            numberOfLikes: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '' //зануление поля ввода после добавления поста
        this._rerenderEntireTree()
    },
    /*addNewMessage () {}*/

    subscribe(callback) {
        this._rerenderEntireTree = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostsType = {
                id: 5,
                postTitle: action.newPostText,
                numberOfLikes: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''        //зануление поля ввода после добавления поста
            this._rerenderEntireTree()
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._rerenderEntireTree()
        } else if (action.type === ADD_MESSAGE) {
            //const body = this._state.dialogsPage.newMessageBody
            const newMessage = {
                id: 6,
                message: action.newMessageBody,
            }
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messages.push(newMessage)
            this._rerenderEntireTree()
        } else if (action.type === NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._rerenderEntireTree()
        }
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
export const addMessageAC = (newMessageBody: string) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody: newMessageBody
    } as const
}
export const changeMessageBodyAC = (body: string) => {
    return {
        type: NEW_MESSAGE_BODY,
        body: body
    } as const
}