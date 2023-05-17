import {authAPI} from "../api/api";
import {AppActionsTypes, AppThunk} from "./redux-store";
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
    console.log("setAuthUserDataAC")
    return {
        // console.log("response", response)
        type: "SET-USER-DATA",
        payload: {id, email, login, isAuth}
    } as const
}
export const getAuthUserDataTC = (): AppThunk => {
    console.log("getAuthUserDataTC")
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                //console.log("response", response)
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserDataAC(id, email, login, true))
                }
            })
    }
}
export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                //console.log("response", response)

                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataTC())
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