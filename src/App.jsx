import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Dialogs from './components/Dialogs/Dialogs';
import Sidebar from './components/Sidebar/Sidebar';
import FriendsContainer from './components/Friends/FriendsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = props => {
  return (
    <div className="App">
      <Header></Header>

      <div className="App-container Main-container">
        <Sidebar></Sidebar>
        {/* render ждет функцию, component ждет компоненту
              необходим render, чтобы прокинуть props
        */}

        <Route path="/profile" render={() => <ProfileContainer></ProfileContainer>}></Route>
        <Route path="/dialogs" render={() => <Dialogs></Dialogs>}></Route>
        <Route path="/friends" render={() => <FriendsContainer></FriendsContainer>}></Route>
      </div>
    </div>
  );
}

export default App;