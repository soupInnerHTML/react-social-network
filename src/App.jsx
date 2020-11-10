import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Sidebar from './components/Sidebar/Sidebar';
import Friends from './components/Friends/Friends';
import {Route} from 'react-router-dom';



const App = props => {
  let getProfile = () => <Profile dispatch={props.dispatch} 
      profileState={props.state.profilePage}></Profile>,

      getDialogs = () => <Dialogs dispatch={props.dispatch} 
      dialogsState={props.state.dialogsPage}></Dialogs>,
      
      getFriends = () => <Friends friendsState={props.state.friendsPage}></Friends>

      
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