const FOLLOW = 'follow'
const UNFOLLOW = 'unfollow'
const SET_USERS = 'setUsers'
const UP_CURRENT_PAGE = 'setCurrentPage'
const FETCHING = 'fetchingFriends'
const FETCHED = 'fetchedFriends'
const NULL_FRIENDS = 'nullFriends'
const FOLLOW_UNFOLLOW_REQUEST_IN_PROGRESS = 'followUnfollowRequestInProgress'

export const follow = id => ({
    type: FOLLOW,
    id,
})

export const unfollow = id => ({
    type: UNFOLLOW,
    id,
})

export const setUsers = users => ({
    type: SET_USERS,
    users,
})

export const upCurrentPage = () => ({
    type: UP_CURRENT_PAGE,
})

export const fetching = () => ({
    type: FETCHING,
})

export const fetched = () => ({
    type: FETCHED,
})

export const nullFriends = () => ({
    type: NULL_FRIENDS,
})

export const followUnfollowRequestInProgress = (isFollowInProgress, id) => ({
    type: FOLLOW_UNFOLLOW_REQUEST_IN_PROGRESS,
    isFollowInProgress,
    id
})

let initialState = {
    friendsData: [],
    pageSize: 100,
    currentPage: 1,
    isFetching: true,
    usersToChangeFollowState: []
}

const friendsReducer = (state = initialState, action) => {

    // let copyState = JSON.parse(JSON.stringify(state))


    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, friendsData: [...state.friendsData].map(friend => {
                    if (friend.id === action.id) {
                        return { ...friend, followed: true }
                    }
                    else {
                        return friend
                    }
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state, friendsData: [...state.friendsData].map(friend => {
                    if (friend.id === action.id) {
                        return { ...friend, followed: false }
                    }
                    else {
                        return friend
                    }
                })
            }

        }

        case SET_USERS: {
            return { ...state, friendsData: [...state.friendsData, ...action.users], }
        }

        case UP_CURRENT_PAGE: {
            return { ...state, currentPage: state.currentPage + 1 }
        }

        case FETCHING: {
            return { ...state, isFetching: true }
        }

        case FETCHED: {
            return { ...state, isFetching: false }
        }

        case NULL_FRIENDS: {
            return { ...state, friendsData: [], currentPage: 1, }
        }

        case FOLLOW_UNFOLLOW_REQUEST_IN_PROGRESS: {
            return {
                ...state, usersToChangeFollowState: action.isFollowInProgress ?
                    [...state.usersToChangeFollowState, action.id] :
                    state.usersToChangeFollowState.filter(id => id != action.id)
            }
        }

        default:
            return state
    }
}

export default friendsReducer