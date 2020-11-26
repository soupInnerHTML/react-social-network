import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import friendsReducer from './friendsReducer'
import authReducer from './authReducer';
import { createStore, combineReducers } from "redux"
import feedReducer from './feedReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    feedPage: feedReducer,
    auth: authReducer,
});

let store = createStore(reducers)

window.store = store

export default store