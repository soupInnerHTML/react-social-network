import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer';
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import feedReducer from './feedReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    feedPage: feedReducer,
    users: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store

export default store