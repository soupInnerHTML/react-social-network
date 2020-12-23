import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import feedReducer from "./feedReducer";
import { reducer as formReducer } from "redux-form";
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    feed: feedReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

// @ts-ignore
window.store = store

export default store