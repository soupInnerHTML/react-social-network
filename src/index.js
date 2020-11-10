import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let renderEntireTree = localState => {
  ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={localState} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        {/* use bind to save 'this' */}
      </React.StrictMode>,
      document.getElementById('root')
    );
}

renderEntireTree(store.getState())
store.subcribe(renderEntireTree)

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
