import axios from "axios";
//type
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
export type PhotoType = {
    small: string;
    large: string
}
export type ProfileType = {
    aboutMe?: string
    contacts?: ContactType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: null | number
    photos: PhotoType
}
export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string,
    profile: null | ProfileType,
    status: string
};
export type PostsType = {
    id: string,
    numberOfLikes: number,
    postTitle: string
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
export type AppStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    usersPage: UsersType
}
export type MessagesType = {
    id: string,
    message: string,

};
export type DialogsType = {
    id: string,
    name: string
};
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    //newMessageBody: string
};
const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "04feb261-a80c-4052-8671-12911595a77d"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me/`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}
export const profileAPI = {
    getProfile(userId: null | number) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId: null | number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}