import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import friendsReducer from './friendsReducer'
import authReducer from './authReducer';
import { createStore, combineReducers } from "redux"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    auth: authReducer
});

let store = createStore(reducers)

window.store = store

export default store