import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataTC, logoutTC} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth: boolean,
    login: null | string
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void,
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header
            {...this.props}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
export default connect(mapStateToProps, {
    getAuthUserData: getAuthUserDataTC,
    logout: logoutTC
})(HeaderContainer)