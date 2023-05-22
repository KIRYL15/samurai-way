import './App.css';
import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Login from "./components/Login/Login";
import {AppStateType} from "./redux/redux-store";
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {getAuthUserDataTC} from "./redux/auth-reducer";
import UsersContainer from "./components/Users/UsersContainer";
import {Preloader} from "./components/Common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    initialized: boolean
}
type MapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<MapDispatchToPropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        //debugger
        if (this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app">
                <HeaderContainer/> {/*заголовок*/}
                <Navbar/> {/*панель навигации*/}
                <div className='app-content'>
                    {/*<Route exact path={"/"}>*/}
                    {/*    <Redirect to={"/ProfileContainer"}/>*/}
                    {/*</Route>*/}
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/> {/*//страница с диалогом //exact - означает точь-в-точь*/}
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/> {/*//профиль*/}
                    <Route path={'/users'} render={() => <UsersContainer/>}/> {/*//страница с Users*/}
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose<React.ComponentType>(
    withRouter, connect(mapStateToProps, {
        getAuthUserData: getAuthUserDataTC
    })
)(App) as React.ComponentClass