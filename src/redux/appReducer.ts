import { authThunkCreator as auth } from "./authReducer"

const INIT = "appReducer/init"

export type stateType = {
    isInited: boolean
}
type actionType = {
    type: string
    flag: boolean
}
type initActionType = {
    type: typeof INIT
    flag: boolean
}

export const init = (flag = true): initActionType => ({
    type: INIT,
    flag
})

export const initApp = () => async (dispatch: (o: object) => void) => {
    let whenAuth = dispatch(auth())
    await Promise.all([whenAuth])
    dispatch(init())
}

let initialState: stateType = {
    isInited: false,
}

const appReducer = (state = initialState, action: actionType): stateType => {
    switch (action.type) {
        case INIT:
            return {
                ...state, isInited: action.flag
            }

        default:
            return state
    }

}

export default appReducer