const FOLLOW = 'follow'
const UNFOLLOW = 'unfollow'
const SET_USERS = 'setUsers'
const UP_CURRENT_PAGE = 'setCurrentPage'
const FETCHING = 'fetchingFriends'
const FETCHED = 'fetchedFriends'

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

let initialState = {
    friendsData: [],
    pageSize: 1,
    currentPage: 1,
    isFetching: true
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
            let areYouSure = window.confirm('Вы уверены, что хотите удалить этого пользователя из друзей?')

            if (areYouSure) {
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
            else {
                return state
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

        default:
            return state
    }
}

export default friendsReducer