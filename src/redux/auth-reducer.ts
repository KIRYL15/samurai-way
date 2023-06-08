import {authAPI, securityAPI} from "../api/api";
import {AppActionsTypes, AppDispatch, AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

//type
export type AuthActionType = setAuthUserDataAT | getCaptchaUrlSuccessAT
type setAuthUserDataAT = ReturnType<typeof setAuthUserDataAC>
type getCaptchaUrlSuccessAT = ReturnType<typeof getCaptchaUrlSuccessAC>
export type AuthStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
    captchaUrl: null | string
}
//initial
const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null as string | null // if null, captcha is not required
}
//reducer
export const AuthReducer = (state = initialState, action: AppActionsTypes): AuthStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
            }
        case "GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state,
                ...action.payload
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
export const getCaptchaUrlSuccessAC = (captchaUrl: null | string) => {
    return {
        type: "GET-CAPTCHA-URL-SUCCESS",
        payload: {captchaUrl}
    } as const
}

export const getAuthUserDataTC = () =>
    async (dispatch: AppDispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    }

export const loginTC = (email: string, password: string, rememberMe: boolean, captchaUrl:null | string): AppThunk => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captchaUrl)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrlTC())
            }
            let message = response.data.messages.length > 0
                ? response.data.messages[0]
                : "Some error"
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}
export const logoutTC = (): AppThunk => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    }
}
export const getCaptchaUrlTC = (): AppThunk => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccessAC(captchaUrl))
    }

}