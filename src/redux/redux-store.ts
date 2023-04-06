import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {combineReducers, createStore} from "redux"


export const reducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

export type AppStateType = ReturnType<typeof reducer>
export const store = createStore(reducer)

//export type RootStateType = ReturnType<typeof store.getState>
// @ts-ignore
window.store = store