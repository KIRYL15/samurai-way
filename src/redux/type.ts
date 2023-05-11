import {addMessageAC} from "./dialogs-reducer";
import {setUserProfileAC, setUserStatusAC} from "./profile-reducer";
import {
     followSuccessAC,
    setCurrentPageAC,
    setToggleIsFetchingAC,
    setToggleIsFollowingProgressAC,
    setUsersAC,
    setUsersTotalCountAC,
     unFollowSuccessAC
} from "./users-reducer";
import {setAuthUserDataAC} from "./auth-reducer";

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
export type PhotoType =
    { small: string; large: string }
export type ProfileType = {
    aboutMe?: string
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
    profile: null | ProfileType,
    status:string

};
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    //newMessageBody: string
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
    isFetching: boolean,
    followingInProgress: number[]
}
export type UserType = {
    id: number,
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
    | ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unFollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof setToggleIsFetchingAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof setToggleIsFollowingProgressAC>
    | ReturnType<typeof setUserStatusAC>
