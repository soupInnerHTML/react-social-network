import { authThunkCreator as auth } from "./authReducer"

const INIT = "init"

export const init = (flag = true) => ({
    type: INIT,
    flag,
})

export const initApp = () => async dispatch => {
    let whenAuth = dispatch(auth())
    await Promise.all([whenAuth])
    dispatch(init())
}

let initialState = {
    isInited: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {
                ...state, isInited: action.flag,
            }

        default:
            return state
    }

}

export default appReducer