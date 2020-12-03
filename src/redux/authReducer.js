import { usersAPI } from '../api/api';

const SET_USER_DATA = 'setUderData'

export const setUserData = (login, email, id, avatar, isNotAuth) => ({
    type: SET_USER_DATA,
    userData: {
        login,
        email,
        id,
        avatar,
        isNotAuth
    }
})

export const authThunkCreator = () => (
    dispatch => {
        usersAPI.getWhoAmI().then(data => {
            let { login, email, id } = data.data
            dispatch(setUserData(login, email, id, usersAPI.getAvatarByName(data.data.login).then(r => r), data.resultCode))
        })
    }
)

let initialState = {
    login: '',
    email: '',
    id: '',
    avatar: '',
    isNotAuth: undefined
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.userData }
        default:
            return state
    }
}

export default authReducer