import {ProfileReducer} from "./profile-reducer";
import {DialogsReducer} from "./dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux"
import {UsersReducer} from "./users-reducer";
import {AuthReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

export type AppStateType = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//export type RootStateType = ReturnType<typeof store.getState>
// @ts-ignore
window.store = store