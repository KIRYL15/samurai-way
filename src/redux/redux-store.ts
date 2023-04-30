import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {combineReducers, createStore} from "redux"
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";


export const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)

//export type RootStateType = ReturnType<typeof store.getState>
// @ts-ignore
window.store = store