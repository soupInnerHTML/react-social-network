import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { initApp } from "./redux/appReducer";
import Sidebar from "./components/Sidebar/Sidebar";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import FeedContainer from "./components/Feed/FeedContainer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import { withLazyLoad } from "./hoc/withLazyLoad";
import ProfileSettingsContainer from "./components/ProfileSettings/ProfileSettingsContainer";

// lazy load
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs") )
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer") )

/* 
render ждет функцию, component ждет компоненту
необходим render, чтобы прокинуть props

switch нужен для корректной работы редиректа
*/

class App extends React.Component {

    componentDidMount() {
        this.props.initApp()
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
                    </Switch>
                    
                    <Route path="/profile/:userId?" render={() => <ProfileContainer></ProfileContainer>}></Route>
                    <Route path="/dialogs" render={withLazyLoad(Dialogs)}></Route>
                    <Route path="/friends" render={() => <FriendsContainer></FriendsContainer>}></Route>
                    <Route path="/users" render={() => <UsersContainer></UsersContainer>}></Route>
                    <Route path="/feed" render={() => <FeedContainer></FeedContainer>}></Route>
                    <Route path="/login" render={withLazyLoad(LoginContainer)}></Route>
                    <Route path="/settings" render={() => <ProfileSettingsContainer></ProfileSettingsContainer>}></Route>

                </div>
            </div> : <Preloader></Preloader>
        );
    }
}

const mapDispatchToProps = {
    initApp,
}

const mapStateToProps = state => ({
    isInited: state.app.isInited,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);