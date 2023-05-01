import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataThunkCreator, setAuthUserDataAC} from "../../redux/auth-reducer";

export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    isAuth: boolean,
    login: null | string
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: null | number, email: null | string, login: null | string, isAuth: boolean) => void
    getAuthUserData:() => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
        /*authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login, isAuth} = response.data.data
                    this.props.setAuthUserData(id, email, login, isAuth)
                }
            })*/
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
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {
    setAuthUserData: setAuthUserDataAC,
    getAuthUserData: getAuthUserDataThunkCreator
})(HeaderContainer)