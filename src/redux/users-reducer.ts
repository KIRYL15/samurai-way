import {ActionsTypes, UsersType, UserType} from "./type";

export const UNFOLLOW = "UNFOLLOW"
export const FOLLOW = "FOLLOW"
export const SET_USERS = "SET-USERS"
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
export const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT"
export const TOOGLE_IS_FETCHING = "TOOGLE-IS-FETCHING"

const initialState: UsersType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 4,//текущая страница
    isFetching: true,
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
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "SET-USERS-TOTAL-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "TOOGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}

export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalCount
    } as const
}
export const setToogleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOOGLE_IS_FETCHING,
        isFetching
    } as const
}