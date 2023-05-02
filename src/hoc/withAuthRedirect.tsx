import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {
    debugger
    const RedirectComponent = (props: MapStateToPropsType) => {
        debugger
        let {isAuth, ...resProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...resProps as T}/>
    }
    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent
}