import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer';
import appReducer from './appReducer';
import feedReducer from './feedReducer';
import { reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    feedPage: feedReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store

export default store