import {ActionsTypes, UsersType, UserType} from "./type";
import {userAPI} from "../api/api";
import {Dispatch} from "redux";

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET-USERS"
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
export const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT"
export const TOGGLE_IS_FETCHING = "TOOGLE-IS-FETCHING"
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOOGLE-IS-FOLLOWING-PROGRESS"

const initialState: UsersType = {
    users: [],
    pageSize: 10,//количество пользователей на странице
    totalUsersCount: 0,
    currentPage: 4,//текущая страница
    isFetching: true,//loading
    followingInProgress: []
}
export const UsersReducer = (state = initialState, action: ActionsTypes): UsersType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.userId
                        ? {...user, followed: true}
                        : user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === action.userId
                        ? {...user, followed: false}
                        : user
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const followSuccessAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unFollowSuccessAC = (userId: number) => {
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
export const setToggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const
}
export const setToggleIsFollowingProgressAC = (userId: number, isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        userId,
        isFetching
    } as const
}
//THUNK
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(setToggleIsFetchingAC(true))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setToggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items));
                dispatch(setUsersTotalCountAC(data.totalCount));
                dispatch(setCurrentPageAC(currentPage));
            })
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(setToggleIsFollowingProgressAC(userId, true))
        userAPI.follow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccessAC(userId))
                }
                dispatch(setToggleIsFollowingProgressAC(userId,false))
            })
    }
}
export const unFollow = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(setToggleIsFollowingProgressAC(userId, true))
        userAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unFollowSuccessAC(userId))
                }
                dispatch(setToggleIsFollowingProgressAC(userId,false))
            })
    }
}

