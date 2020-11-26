const SET_FEED = 'setFeed'

export const setFeed = (feed) => ({
    type: SET_FEED,
    feed
})

let initialState = {
    feed: []
}

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEED:
            return { ...state, feed: action.feed }
        default:
            return state
    }
}
export default feedReducer