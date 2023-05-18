import {authAPI} from "../api/api";
import {AppActionsTypes, AppDispatch, AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

//type
export type AuthActionType = setAuthUserDataAT
type setAuthUserDataAT = ReturnType<typeof setAuthUserDataAC>
export type AuthStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}
//initial
const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
//reducer
export const AuthReducer = (state = initialState, action: AppActionsTypes): AuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}
export const setAuthUserDataAC = (id: null | number, email: null | string, login: null | string, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {id, email, login, isAuth}
    } as const
}
export const getAuthUserDataTC = () => {
    return (dispatch:AppDispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserDataAC(id, email, login, true))
                }
            })
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch:any) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
                } else {
                    //debugger
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}
export const logoutTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataAC(null, null, null, false))
                }
            })
    }
}