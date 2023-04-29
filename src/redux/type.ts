import {addMessageAC, changeMessageBodyAC} from "./dialogs-reducer";
import {addPostAC, setUserProfileAC, updateNewPostTextAC} from "./profile-reducer";
import {
    followAC,
    setCurrentPageAC,
    setToogleIsFetchingAC,
    setUsersAC,
    setUsersTotalCountAC,
    unFollowAC
} from "./users-reducer";

export type AppStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    usersPage: UsersType
}

export type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotoType=
    { small: string; large: string}
export type ProfileType = {
    aboutMe?:string
    contacts?: ContactType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos: PhotoType
}
export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string,
    profile:ProfileType

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
export type UsersType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean

}
export type UserType = {
    id: string,
    photos: { small: string | null, large: string | null },
    followed: boolean,
    name: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}
export type ActionsTypes =
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeMessageBodyAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof setToogleIsFetchingAC>
    | ReturnType<typeof setUserProfileAC>
