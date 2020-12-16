import { usersAPI } from "../api/api";
import { setFollowState as setFollowStateForProfile } from "./profileReducer";

const FOLLOW = "follow"
const UNFOLLOW = "unfollow"
const SET_USERS = "setUsers"
const UP_CURRENT_PAGE = "setCurrentPage"
const FETCHING = "fetchingUsers"
const FETCHED = "fetchedUsers"
const NULL_USERS = "nullUsers"
const SET_USERS_QUANTITY = "setUsersQuantity"
const FOLLOW_UNFOLLOW_REQUEST_IN_PROGRESS = "followUnfollowRequestInProgress"
// const SET_MAX_CURRENT_PAGE = 'setMaxCurrentPage'
const SET_IS_FRIENDS = "setIsFriends"

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

export const nullUsers = () => ({
    type: NULL_USERS,
})

export const setUsersQuantity = usersQuantity => ({
    type: SET_USERS_QUANTITY,
    usersQuantity,
})

// export const setMaxCurrentPage = () => ({
//     type: SET_MAX_CURRENT_PAGE,
// })

export const setIsFriends = (isFriends) => ({
    type: SET_IS_FRIENDS,
    isFriends,
})

export const followUnfollowRequestInProgress = (isFollowInProgress, id) => ({
    type: FOLLOW_UNFOLLOW_REQUEST_IN_PROGRESS,
    isFollowInProgress,
    id,
})

export const getUsersDataThunkCreator = (pageSize, currentPage, isGetFriends) => {
    return (dispatch) => {
        dispatch(fetching())
        // TODO доделать if (data.resultCode === 0)
        usersAPI.getUsers(pageSize, currentPage, isGetFriends)
            .then(data => {
                // if (data.resultCode === 0) {
                dispatch(fetched())
                dispatch(setUsers(data.items))
                dispatch(setUsersQuantity(data.totalCount))
                // dispatch(setMaxCurrentPage())

                if (data.totalCount < pageSize && !data.items.length) {
                    usersAPI.getUsers(pageSize, 1, isGetFriends).then(data => {
                        dispatch(setUsers(data.items))
                    })
                    // }
                }
            }).catch(e => alert(e))


        // VK VK VK VK VK VK
        // usersAPI.getVkFriends()
        //     .then(obj => {
        //         dispatch(fetched())
        //         dispatch(setUsers(obj.data.response.items))
        //     })
    }
}

export const followUser = id => changeFollowStateThunkCreator(id, usersAPI.follow, true)
export const unfollowUser = id => changeFollowStateThunkCreator(id, usersAPI.unfollow, false)

// вспомогательные функции
const changeFollowStateThunkCreator = (id, async, isFollow) => {
    return dispatch => {
        dispatch(followUnfollowRequestInProgress(true, id))

        return async(id)
            .then(data => {
                if (data.resultCode) {
                    alert(data.messages)
                }
                else {
                    if (isFollow) {
                        dispatch(follow(id))
                        dispatch(setFollowStateForProfile(true))
                    }
                    else {
                        dispatch(unfollow(id))
                        dispatch(setFollowStateForProfile(false))
                    }
                }

                dispatch(followUnfollowRequestInProgress(false, id))
            })
            .catch(e => {
                dispatch(followUnfollowRequestInProgress(false, id))
                alert(e)
            })
    }
}

const getChangedFollowState = (state, action, flag) => {
    return {
        ...state, usersData: [...state.usersData].map(user => {
            if (user.id === action.id) {
                return { ...user, followed: flag, }
            }
            else {
                return user
            }
        }),
    }
}
// end


let initialState = {
    usersData: [],
    pageSize: 100,
    currentPage: 1,
    isFetching: true,
    usersQuantity: 0,
    maxCurrentPage: 0,
    // isFriends: undefined,
    usersToChangeFollowState: [],
}

const usersReducer = (state = initialState, action) => {

    // let copyState = JSON.parse(JSON.stringify(state))


    switch (action.type) {
        case FOLLOW:
            return getChangedFollowState(state, action, true)

        case UNFOLLOW:
            return getChangedFollowState(state, action, false)

        case SET_USERS:
            return { ...state, usersData: [...state.usersData, ...action.users], }

        case UP_CURRENT_PAGE:
            return { ...state, currentPage: state.currentPage + 1, }

        case FETCHING:
            return { ...state, isFetching: true, }

        case FETCHED:
            return { ...state, isFetching: false, }

        case NULL_USERS:
            return { ...state, usersData: [], currentPage: 1, }

        case SET_USERS_QUANTITY:
            return { ...state, usersQuantity: action.usersQuantity, }

        // case SET_MAX_CURRENT_PAGE:
        //     return { ...state, maxCurrentPage: Math.ceil(state.usersQuantity / state.pageSize), }

        case SET_IS_FRIENDS:
            return { ...state, isFriends: action.isFriends, }


        case FOLLOW_UNFOLLOW_REQUEST_IN_PROGRESS:
            return {
                ...state, usersToChangeFollowState: action.isFollowInProgress ?
                    [...state.usersToChangeFollowState, action.id] :
                    state.usersToChangeFollowState.filter(id => id !== action.id),
            }

        default:
            return state
    }
}

export default usersReducer