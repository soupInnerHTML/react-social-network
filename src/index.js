import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// let dispatch = store.dispatch.bind(store)         
{/* 
  use bind to save 'this' 
  isolate store from <App>
*/}

let renderEntireTree = localState => {
  ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App store={store}/>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

renderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  renderEntireTree(state)
})

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
