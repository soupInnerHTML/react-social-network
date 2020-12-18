import { stopSubmit } from "redux-form";
import { profileAPI, authAPI } from "../api/api";
import { init } from "./appReducer";


const SET_USER_DATA = "setUderData"

export const setUserData = (login, email, id, avatar, isNotAuth) => ({
    type: SET_USER_DATA,
    userData: {
        login,
        email,
        id,
        avatar,
        isNotAuth,
    },
})

const getWhoAmI = async (dispatch, data) => {
    let my = await authAPI.getWhoAmI()
    let { login, email, id, } = my.data
    let avatar = await profileAPI.getAvatarById(id)
    dispatch(setUserData(login, email, id, avatar, data.resultCode))
}

export const authThunkCreator = () => (
    async dispatch => {
        let data = await authAPI.getWhoAmI()
        if (data.resultCode === 0) {
            getWhoAmI(dispatch, data)
        }
        else {
            dispatch(setUserData(null, null, null, null, true))
        }
    }
)

export const loginThunkCreator = (loginProps) => (
    dispatch => {
        return authAPI.login(loginProps).then(data => {
            if (data.resultCode === 0) {
                dispatch(init(false))
                getWhoAmI(dispatch, data).then(() => dispatch(init()))
            }
            else {
                let error = stopSubmit("login", { _error: data.messages[0], })
                dispatch(error)
            }
        })
    }
)

export const logoutThunkCreator = () => (
    async dispatch => {
        let data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, null, true))
        }

    }
)

let initialState = {
    login: "",
    email: "",
    id: "",
    avatar: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.userData, }
        default:
            return state
    }
}

export default authReducer