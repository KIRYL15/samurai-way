import React from 'react';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {UsersClass} from "./UsersClass";
import {AppStateType} from "../../redux/redux-store";
import {UsersType, UserType} from "../../redux/type";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer";

export type UsersTypeProps = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    usersPage: UsersType
}
type MapDispatchToPropsType = {
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<UserType>) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)