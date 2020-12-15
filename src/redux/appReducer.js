import { authThunkCreator as auth } from './authReducer'

const INIT = 'init'


export const init = () => ({
    type: INIT,
})

export const initApp = () => dispatch => {
    let whenAuth = dispatch(auth())
    Promise.all([whenAuth]).then(() => {
        dispatch(init())
    })
}

let initialState = {
    isInited: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {
                ...state, isInited: true,
            }

        default:
            return state
    }

}

export default appReducer