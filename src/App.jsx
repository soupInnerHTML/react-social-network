import "./App.css";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import FeedContainer from "./components/Feed/FeedContainer";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileSettingsContainer from "./components/ProfileSettings/ProfileSettingsContainer";
import Swal from "sweetalert2";
import { Redirect, Route, Switch } from "react-router-dom";
import { initApp } from "./redux/appReducer";
import { connect } from "react-redux";
import { withLazyLoad } from "./hoc/withLazyLoad";
import { getIsInitied, getIsNeedToHandle } from "./redux/usersSelectors";

// lazy load
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs") )
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer") )

/* 
render ждет функцию, component ждет компоненту
необходим render, чтобы прокинуть props

switch нужен для корректной работы редиректа
*/

class App extends React.Component {

    catchUnhanledError = (e) => {
        e.promise.catch( () => Swal.fire("Oops...", e.reason + "",  "error") );
    }

    componentDidMount() {
        this.props.initApp()
        window.addEventListener("unhandledrejection", this.catchUnhanledError)
    }

    render() {
        const { props, } = this;

        return (
            props.isInited ? <div className="App">
                <HeaderContainer></HeaderContainer>

                <div className="App-container Main-container">
                    <Sidebar></Sidebar>

                    <Switch>
                        <Redirect exact from='/' to='/profile' />
                        <Route path="/profile/:userId?" render={() => <ProfileContainer></ProfileContainer>}></Route>
                        <Route path="/dialogs" render={withLazyLoad(Dialogs)}></Route>
                        <Route path="/friends" render={() => <FriendsContainer></FriendsContainer>}></Route>
                        <Route path="/users" render={() => <UsersContainer></UsersContainer>}></Route>
                        <Route path="/feed" render={() => <FeedContainer></FeedContainer>}></Route>
                        <Route path="/login" render={withLazyLoad(LoginContainer)}></Route>
                        <Route path="/settings" render={() => <ProfileSettingsContainer></ProfileSettingsContainer>}></Route>
                        <Route render={() => <p>404</p>}></Route>
                    </Switch>

                </div>
            </div> : <Preloader></Preloader>
        );
    }
}

const mapDispatchToProps = {
    initApp,
}

const mapStateToProps = state => ({
    isInited: getIsInitied(state),
    isNeedToHandle: getIsNeedToHandle(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);