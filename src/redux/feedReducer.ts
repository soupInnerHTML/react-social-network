import { VKAPI } from "../api/api";

export type initialStateType = typeof initialState

type setFeedActionType = {
    type: typeof SET_FEED
    feed: object
}

const SET_FEED = "feedReducer/setFeed"

export const setFeed = (feed: Array<Object>): setFeedActionType => ({
    type: SET_FEED,
    feed,
})

export const getVkFeedThunkCreator = () => (
    async (dispatch: any) => {
        let items = await VKAPI.getVkFeed()
        dispatch(setFeed(items))
    }
)

let initialState = {
    feed: [] as Array<Object>,
}

const feedReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_FEED:
            return { ...state, feed: action.feed, }
        default:
            return state
    }
}
export default feedReducer