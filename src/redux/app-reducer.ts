import {AppDispatch} from "./redux-store";
import {getAuthUserDataTC} from "./auth-reducer";
//type
export type setInitializedAT = ReturnType<typeof initializedSuccessAC>
export type InitializedStateType = {
    initialized: boolean
    globalError:string|null

}
//initial
const initialState: InitializedStateType = {
    initialized: false,
    globalError:null
}
//reducer
export const AppReducer = (state = initialState, action: setInitializedAT): InitializedStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}
export const initializedSuccessAC = () => {
    return {
        type: "SET-INITIALIZED",
    } as const
}
export const initializeAppTC = () => {
    return (dispatch: AppDispatch) => {
        let promise = dispatch(getAuthUserDataTC())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccessAC())
            })
    }
}
