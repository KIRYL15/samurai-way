import './App.css';
import React from 'react';
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import Login from "./components/Login/Login";
import {AppStateType, store} from "./redux/redux-store";
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {Preloader} from "./components/Common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {initializeAppTC} from "./redux/app-reducer";
import {withSuspense} from "./hoc/withSuspense";
//lazy загрузка. Ленивая загрузка
const DialogsContainer = React.lazy(() => import( "./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import( "./components/Profile/ProfileContainer"))

type MapDispatchToPropsType = {
    initializeApp: () => void
    initialized: boolean
}
type MapStateToPropsType = {
    initialized: boolean
}

class App extends React.Component<MapDispatchToPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initializeApp) {
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
                    <Route
                        path={'/dialogs'}
                        render={withSuspense(DialogsContainer)}
                    //     render={() =>
                    //     <Suspense fallback={<div>Loading...</div>}>
                    //         <DialogsContainer/>
                    //     </Suspense>
                    // }
                    />
                    {/*//страница с диалогом //exact - означает точь-в-точь*/}
                    <Route
                        path={'/profile/:userId?'}
                        render={withSuspense(ProfileContainer)}
                    //     render={() =>
                    //     <Suspense fallback={<div>Loading...</div>}>
                    //         <ProfileContainer/>
                    //     </Suspense>
                    // }
                    />
                    {/*//профиль*/}
                    <Route path={'/users'} render={() => <UsersContainer/>}/> {/*//страница с Users*/}
                    <Route path={'/login'} render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}
export const AppContainer = compose<React.ComponentType>(
    withRouter, connect(mapStateToProps, {
        initializeApp: initializeAppTC
    })
)(App) as React.ComponentClass
export const AppMain = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}