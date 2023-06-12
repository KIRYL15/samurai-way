import {userAPI, UsersType, UserType} from "../api/api";
import {AppActionsTypes, AppThunk} from "./redux-store";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utilts/oblect-helpers";
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
    currentPage: 1,//текущая страница
    isFetching: false,//loading
    followingInProgress: []
}
//Reducer
export const UsersReducer = (state = initialState, action: AppActionsTypes): UsersType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "SET-CURRENT-PAGE" :
            return {...state, currentPage: action.currentPage}
        case "SET-USERS-TOTAL-COUNT" :
            return {...state, totalUsersCount: action.totalCount}
        case "TOGGLE-IS-FETCHING" :
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS" :
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
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}
export const setToggleIsFollowingProgressAC = (userId: number, isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        userId,
        isFetching
    } as const
}
//THUNK
export const getUsersTC = (page: number, pageSize: number): AppThunk => {
    return async (dispatch, getState: () => any) => {
        getState()
        dispatch(setToggleIsFetchingAC(true))
        dispatch(setCurrentPageAC(page))
        let data = await userAPI.getUsers(page, pageSize)
        dispatch(setToggleIsFetchingAC(false))
        dispatch(setUsersAC(data.items));
        dispatch(setUsersTotalCountAC(data.totalCount));
    }
}
const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(setToggleIsFollowingProgressAC(userId, true))
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setToggleIsFollowingProgressAC(userId, false))
}
export const followTC = (userId: number): AppThunk => {
    return async (dispatch) => {

        await followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), followSuccessAC)
    }
}
export const unFollowTC = (userId: number): AppThunk => {

    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, userAPI.unFollow.bind(userAPI), unFollowSuccessAC)
    }
}

