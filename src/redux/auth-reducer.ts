import {ActionsTypes, AuthStateType} from "./type";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export const SET_USER_DATA = "SET-USER-DATA"
const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth:false
}

export const AuthReducer = (state = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data, isAuth:true
            }
        default:
            return state;
    }
}

export const setAuthUserDataAC = (id: null | number, email: null | string, login: null | string, isAuth:boolean) => {
    return {
        type: SET_USER_DATA,
        data: {
            id,
            email,
            login
        },
        isAuth
    } as const
}
export const getAuthUserDataThunkCreator=()=>(dispatch:Dispatch)=>{
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login, isAuth} = response.data.data
                dispatch(setAuthUserDataAC(id, email, login, isAuth))
            }
        })
}

