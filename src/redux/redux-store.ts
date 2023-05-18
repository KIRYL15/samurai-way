import {reducer as formReducer} from "redux-form";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AuthActionType, AuthReducer} from "./auth-reducer";
import {ProfileActionType, ProfileReducer} from "./profile-reducer";
import {DialogsActionType, DialogsReducer} from "./dialogs-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux"
import {UsersActionType, UsersReducer} from "./users-reducer";
import {AppReducer, setInitializedAT} from "./app-reducer";

export type AppStateType = ReturnType<typeof rootReducer>
//все типы для всего App
export type AppActionsTypes = ProfileActionType | AuthActionType | DialogsActionType | UsersActionType| setInitializedAT
//универсальный тип для санок
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsTypes>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsTypes>

export const rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app:AppReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//export type RootStateType = ReturnType<typeof store.getState>
// @ts-ignore
window.store = store