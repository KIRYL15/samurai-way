import {StoreType} from "./type";
import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {combineReducers, createStore} from "redux"


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer
})

export const store: StoreType = createStore(reducers)
export type AppStateType = ReturnType<typeof reducers>

export type RootStateType = ReturnType<typeof store.getState>
// @ts-ignore
window.store = store