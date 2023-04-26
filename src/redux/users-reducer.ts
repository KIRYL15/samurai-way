import {ActionsTypes, UsersType, UserType} from "./type";

export const UNFOLLOW = "UNFOLLOW"
export const FOLLOW = "FOLLOW"
export const SET_USERS = "SET-USERS"

const initialState: UsersType = {
    users: [],
}
export const UsersReducer = (state = initialState, action: ActionsTypes): UsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.userId
                        ? {...user, followed: true}
                        : user
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.userId
                        ? {...user, followed: false}
                        : user
                })
            }
        case "SET-USERS":
            return {...state, users: [...action.users]}

        default:
            return state;
    }
}

export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unFollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}


