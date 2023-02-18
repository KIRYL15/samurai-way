export type AppStateType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}
export type profilePageType = {
    posts: PostsType[]
}
export type dialogsPageType = {
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
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Lui',},
            {id: 2, name: 'Endi',},
            {id: 3, name: 'Bob',},
            {id: 4, name: 'Monika', },
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 1, message: 'How is your'},
            {id: 1, message: 'Hi-hi'},
        ],
    },
}

