import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Sidebar from './components/Sidebar/Sidebar';
import FriendsContainer from './components/Friends/FriendsContainer';



const App = props => {
  console.log(props)
  let getProfile = () => <Profile store={props.store}></Profile>,
      getDialogs = () => <Dialogs store={props.store}></Dialogs>,
      getFriends = () => <FriendsContainer store={props.store}></FriendsContainer>

      
  return (
      <div className="App">
        <Header></Header>

        <div className="App-container Main-container">
          <Sidebar></Sidebar>
          {/* render ждет функцию, component ждет компоненту
              необходим render, чтобы прокинуть props
           */}
           
          <Route exact path="/profile" render={getProfile}></Route>
          <Route path="/dialogs" render={getDialogs}></Route>
          <Route path="/friends" render={getFriends}></Route>
        </div>
      </div>
  );
}

export default App;