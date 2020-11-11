import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
// const { createStore, combineReducers } = require("redux")
import { createStore, combineReducers } from "redux"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers)

export default store