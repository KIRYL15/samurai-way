import './App.css';
import React from 'react';
import {compose} from "redux";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {withSuspense} from "./hoc/withSuspense";
import {Navbar} from "./components/Navbar/Navbar";
import {initializeAppTC} from "./redux/app-reducer";
import {AppStateType, store} from "./redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {Preloader} from "./components/Common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
//React.lazy загрузка. Ленивая загрузка.
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
  /*  catchAllUnhandledErrors=(promiseRejectionEvent:any)=>{
        alert("error")
    }*/
    //срабатывает когда компонента вмонтировалась. Вначале инициализируем App.
    componentDidMount() {
        this.props.initializeApp()
        //window.addEventListener('unhandledrejection',this.catchAllUnhandledErrors)
    }
    /*componentWillUnmount() {
        window.removeEventListener('unhandledrejection',this.catchAllUnhandledErrors)

    }*/

    render() {
        //если компонента не отрисовалась вызывается <Preloader/>.
        if (!this.props.initializeApp) {
            return <Preloader/>
        }
        return (
            <div className="app">
                <HeaderContainer/> {/*заголовок*/}
                <Navbar/> {/*панель навигации*/}
                <div className="app-content">
                    <Switch>
                        <Route exact path='/'
                            render={()=><Redirect to={"/profile"}/>}/>
                        <Route
                            path="/dialogs"
                            render={withSuspense(DialogsContainer)}
                        />
                        {/*//страница с диалогом //exact - означает точь-в-точь*/}
                        <Route
                            path="/profile/:userId?"
                            render={withSuspense(ProfileContainer)}
                        />
                        {/*//профиль*/}
                        <Route path="/users" render={() => <UsersContainer/>}/> {/*//страница с Users*/}
                        <Route path="/login" render={() => <Login/>}/>
                    </Switch>
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
//AppContainer - результат  функции compose над App.
//compose один за одним применяет HOCи. HOC - это функция которая принимает одну компоненту и возвращает контейнерную компоненту над входящей компонентой.
export const AppContainer = compose<React.ComponentType>(
    withRouter, connect(mapStateToProps, {initializeApp: initializeAppTC}))(App) as React.ComponentClass

export const AppMain = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}