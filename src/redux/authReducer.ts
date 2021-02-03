import { stopSubmit } from "redux-form";
import { profileAPI, authAPI, securityAPI, usersAPI } from "../api/api";
import { init } from "./appReducer";

export type stateType = {
    login: string | null
    email: string
    id: string
    avatar: string
    profile: object
    captcha: string
    isNotAuth?: boolean
}
type setUserDataActionType = {
    type: typeof SET_USER_DATA,
    userData: any
}
type getCaptchaActionType = {
    type: typeof GET_CAPTCHA
    captcha: string
}
type setMyProfileActionType = {
    type: typeof SET_MY_PROFILE
    profile: object
}

const SET_USER_DATA = "authReducer/setUserData"
const GET_CAPTCHA = "authReducer/getCaptcha"
const SET_MY_PROFILE = "authReducer/setMyProfile"

export const setUserData = (
    login: string | null,
    email: string | null,
    id: string | null,
    avatar: string | null,
    isNotAuth: boolean,
    captcha?: string | null): setUserDataActionType => ({
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

export const getCaptcha = (captcha: string): getCaptchaActionType => ({
    type: GET_CAPTCHA,
    captcha,
})

export const setMyProfile = (profile: object): setMyProfileActionType => ({
    type: SET_MY_PROFILE,
    profile,
})

const getWhoAmI = async (dispatch: any, data: any) => {
    let my = await authAPI.getWhoAmI()
    let { login, email, id, } = my.data
    // let avatar = await profileAPI.getAvatarById(id)
    let profile = await profileAPI.getProfile(id)

    dispatch(setMyProfile(profile))
    dispatch(setUserData(login, email, id, profile.photos.small, data.resultCode))
    let _cache = new Set()
    let profiles = localStorage.getItem('profiles_rcn')
    _cache.add(profiles).add(profile)
    localStorage.setItem('profiles_rcn', JSON.stringify(_cache))
}

// export const getMyProfile = () => {
//     async (dispatch: any) => {
//         usersAPI.getUserByTerm()
//         // let myProfile = await
//     }
// }

export const authThunkCreator = () => (
    async (dispatch: any) => {
        let data = await authAPI.getWhoAmI()
        if (data.resultCode === 0) {
            getWhoAmI(dispatch, data)
        }
        else {
            dispatch(setUserData(null, null, null, null, true, null))
        }
    }
)

export const loginThunkCreator = (loginProps: any) => (
    (dispatch: any) => {
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
    async (dispatch: any) => {
        let data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, null, true))
        }

    }
)

let initialState: stateType = {
    login: "",
    email: "",
    id: "",
    avatar: "",
    profile: {},
    captcha: "",
}

const authReducer = (state = initialState, action: any): stateType => {
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