import { stopSubmit } from "redux-form";
import { profileAPI, authAPI, securityAPI, usersAPI } from "../api/api";
import { init } from "./appReducer";


const SET_USER_DATA = "authReducer/setUserData"
const GET_CAPTCHA = "authReducer/getCaptcha"
const SET_MY_PROFILE = "authReducer/setMyProfile"

export const setUserData = (login, email, id, avatar, isNotAuth, captcha) => ({
    type: SET_USER_DATA,
    userData: {
        login,
        email,
        id,
        avatar,
        isNotAuth,
        captcha,
    },
})

export const getCaptcha = (captcha) => ({
    type: GET_CAPTCHA,
    captcha,
})

export const setMyProfile = (profile) => ({
    type: SET_MY_PROFILE,
    profile,
})

const getWhoAmI = async (dispatch, data) => {
    let my = await authAPI.getWhoAmI()
    let { login, email, id, } = my.data
    // let avatar = await profileAPI.getAvatarById(id)
    let profile = await profileAPI.getProfile(id)

    dispatch(setMyProfile(profile))
    dispatch(setUserData(login, email, id, profile.photos.small, data.resultCode))
}

export const getMyProfile = () => {
    async dispatch => {
        usersAPI.getUserByTerm()
        // let myProfile = await 
    }
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

                if (data.resultCode === 10) {
                    securityAPI.getCaptchaUrl().then(response => {
                        dispatch(getCaptcha(response.data.url))
                    })
                }
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
    // login: "",
    // email: "",
    // id: "",
    // avatar: "",
    profile: {},
    // captcha: "",
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.userData, }

        case GET_CAPTCHA:
            return { ...state, captcha: action.captcha, }

        case SET_MY_PROFILE:
            return { ...state, profile: action.profile, }

        default:
            return state
    }
}

export default authReducer