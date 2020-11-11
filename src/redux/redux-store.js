import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import friendsReducer from './friendsReducer'
import { createStore, combineReducers } from "redux"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer
});

let store = createStore(reducers)

export default store