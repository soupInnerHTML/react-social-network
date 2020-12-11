import { profileAPI, authAPI } from '../api/api';


const SET_USER_DATA = 'setUderData'

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

const getWhoAmI = (dispatch, data) => {
    authAPI.getWhoAmI().then(my => {
        let { login, email, id, } = my.data
        profileAPI.getAvatarById(id).then(avatar => {
            dispatch(setUserData(login, email, id, avatar, data.resultCode))
        })
    })
}

export const authThunkCreator = () => (
    dispatch => {
        authAPI.getWhoAmI().then(data => {
            if (data.resultCode === 0) {
                getWhoAmI(dispatch, data)
            }
            else {
                dispatch(setUserData(null, null, null, null, true))
            }
        })
    }
)

export const loginThunkCreator = (loginProps) => (
    dispatch => {
        authAPI.login(loginProps).then(data => {
            if (data.resultCode === 0) {
                getWhoAmI(dispatch, data)
            }
        })
    }
)

export const logoutThunkCreator = () => (
    dispatch => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, null, true))
            }
        })
    }
)

let initialState = {
    login: '',
    email: '',
    id: '',
    avatar: '',
    // isNotAuth: undefined,
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