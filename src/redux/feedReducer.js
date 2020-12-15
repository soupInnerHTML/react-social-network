import { VKAPI } from '../api/api';

const SET_FEED = 'setFeed'

export const setFeed = (feed) => ({
    type: SET_FEED,
    feed,
})

export const getVkFeedThunkCreator = () => {
    return dispatch => {
        // this.props.fetching()
        VKAPI.getVkFeed()
            .then(items => {
                // this.props.fetched()
                dispatch(setFeed(items))
            })
    }
}

let initialState = {
    feed: [],
}

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEED:
            return { ...state, feed: action.feed, }
        default:
            return state
    }
}
export default feedReducer