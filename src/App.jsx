import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Sidebar from './components/Sidebar/Sidebar';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import FeedContainer from './components/Feed/FeedContainer';
import LoginContainer from './components/Login/LoginContainer';

/* 
render ждет функцию, component ждет компоненту
необходим render, чтобы прокинуть props

switch нужен для корректной работы редиректа
*/

const App = props => {
    return (
        <div className="App">
            <HeaderContainer></HeaderContainer>

            <div className="App-container Main-container">
                <Sidebar></Sidebar>

                <Switch>
                    <Redirect exact from='/' to='/profile' />
                </Switch>

                <Route exact path="/" render={() => <ProfileContainer></ProfileContainer>}></Route>
                <Route exact path="/profile" render={() => <ProfileContainer></ProfileContainer>}></Route>
                <Route path="/profile/:userId?" render={() => <ProfileContainer></ProfileContainer>}></Route>

                <Route path="/dialogs" render={() => <Dialogs></Dialogs>}></Route>
                <Route path="/friends" render={() => <FriendsContainer></FriendsContainer>}></Route>
                <Route path="/users" render={() => <UsersContainer></UsersContainer>}></Route>
                <Route path="/feed" render={() => <FeedContainer></FeedContainer>}></Route>
                <Route path="/login" render={() => <LoginContainer></LoginContainer>}></Route>

            </div>
        </div>
    );
}

export default App;