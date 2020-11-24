import './App.css';
import { Route } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Sidebar from './components/Sidebar/Sidebar';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';



const App = props => {
  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>

      <div className="App-container Main-container">
        <Sidebar></Sidebar>

        <Route path="/profile/:userId?" render={() => <ProfileContainer></ProfileContainer>}></Route>
        <Route path="/dialogs" render={() => <Dialogs></Dialogs>}></Route>
        <Route path="/friends" render={() => <FriendsContainer></FriendsContainer>}></Route>

        {/* render ждет функцию, component ждет компоненту
              необходим render, чтобы прокинуть props
        */}
      </div>
    </div>
  );
}

export default App;