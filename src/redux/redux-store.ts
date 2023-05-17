import {ProfileActionType, ProfileReducer} from "./profile-reducer";
import {DialogsActionType, DialogsReducer} from "./dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux"
import {UsersActionType, UsersReducer} from "./users-reducer";
import {AuthActionType, AuthReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";

export type AppStateType = ReturnType<typeof rootReducer>
//все типы для всего App
export type AppActionsTypes = ProfileActionType | AuthActionType | DialogsActionType | UsersActionType
//универсальный тип для санок
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsTypes>
export const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//export type RootStateType = ReturnType<typeof store.getState>
// @ts-ignore
window.store = store