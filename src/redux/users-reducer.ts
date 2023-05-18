import {userAPI, UsersType, UserType} from "../api/api";
import {AppActionsTypes, AppThunk} from "./redux-store";
//Types
export type UsersActionType =
    ReturnType<typeof followSuccessAC>
    | ReturnType<typeof unFollowSuccessAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setUsersTotalCountAC>
    | ReturnType<typeof setToggleIsFetchingAC>
    | ReturnType<typeof setToggleIsFollowingProgressAC>
//InitialState
const initialState: UsersType = {
    users: [],
    pageSize: 10,//количество пользователей на странице
    totalUsersCount: 0,
    currentPage: 4,//текущая страница
    isFetching: true,//loading
    followingInProgress: []
}
//Reducer
export const UsersReducer = (state = initialState, action: AppActionsTypes): UsersType => {
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
        case "TOOGLE-IS-FOLLOWING-PROGRESS":
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
//ActionCreator
export const followSuccessAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}
export const unFollowSuccessAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}
export const setUsersTotalCountAC = (totalCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        totalCount
    } as const
}
export const setToggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOOGLE-IS-FETCHING",
        isFetching
    } as const
}
export const setToggleIsFollowingProgressAC = (userId: number, isFetching: boolean) => {
    return {
        type: "TOOGLE-IS-FOLLOWING-PROGRESS",
        userId,
        isFetching
    } as const
}
//THUNK
export const getUsersTC = (page: number, pageSize: number):AppThunk => {
    return (dispatch) => {
        dispatch(setToggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(page))
        userAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(setToggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items));
                dispatch(setUsersTotalCountAC(data.totalCount));
                dispatch(setCurrentPageAC(page));
            })
    }
}
export const followTC = (userId: number):AppThunk => {
    return (dispatch) => {
        dispatch(setToggleIsFollowingProgressAC(userId, true))
        userAPI.follow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccessAC(userId))
                }
                dispatch(setToggleIsFollowingProgressAC(userId, false))
            })
    }
}
export const unFollowTC = (userId: number):AppThunk => {
    return (dispatch) => {
        dispatch(setToggleIsFollowingProgressAC(userId, true))
        userAPI.unFollow(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unFollowSuccessAC(userId))
                }
                dispatch(setToggleIsFollowingProgressAC(userId, false))
            })
    }
}

