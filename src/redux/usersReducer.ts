/* eslint-disable no-use-before-define */
import Swal from "sweetalert2";
import { usersAPI } from "../api/api";
import { setFollowState as setFollowStateForProfile } from "./profileReducer";

type initialStateType = typeof initialState

const FOLLOW = "usersReducer/follow"
const UNFOLLOW = "usersReducer/unfollow"
const SET_USERS = "usersReducer/setUsers"
const UP_CURRENT_PAGE = "usersReducer/setCurrentPage"
const NULL_USERS = "usersReducer/nullUsers"
const SET_USERS_QUANTITY = "usersReducer/setUsersQuantity"
const FOLLOW_UNFOLLOW_REQUEST_IN_PROGRESS = "usersReducer/followUnfollowRequestInProgress"
const SET_IS_FRIENDS = "usersReducer/setIsFriends"

export const follow = (id: number) => ({
    type: FOLLOW,
    id,
})

export const unfollow = (id: number) => ({
    type: UNFOLLOW,
    id,
})

export const setUsers = (users: object) => ({
    type: SET_USERS,
    users,
})

export const upCurrentPage = () => ({
    type: UP_CURRENT_PAGE,
})

export const nullUsers = () => ({
    type: NULL_USERS,
})

export const setUsersQuantity = (usersQuantity: number) => ({
    type: SET_USERS_QUANTITY,
    usersQuantity,
})

export const setIsFriends = (isFriends: boolean) => ({
    type: SET_IS_FRIENDS,
    isFriends,
})

export const followUnfollowRequestInProgress = (isFollowInProgress: boolean, id: number) => ({
    type: FOLLOW_UNFOLLOW_REQUEST_IN_PROGRESS,
    isFollowInProgress,
    id,
})

export const getUsersDataThunkCreator = (pageSize: number, currentPage: number, isGetFriends: boolean) => {
    return async (dispatch: any) => {

        let data = await usersAPI.getUsers(pageSize, currentPage, isGetFriends)

        dispatch(setUsers(data.items))
        dispatch(setUsersQuantity(data.totalCount))

        if (data.totalCount < pageSize && !data.items.length) {
            let friends = await usersAPI.getUsers(pageSize, 1, isGetFriends)
            dispatch(setUsers(friends.items))
        }

        // usersAPI.getVkFriends()
        // dispatch(setUsers(obj.data.response.items))
    }
}

export const followUser = (id: number) => changeFollowStateThunkCreator(id, usersAPI.follow, true)
export const unfollowUser = (id: number) => changeFollowStateThunkCreator(id, usersAPI.unfollow, false)

// вспомогательные функции
const changeFollowStateThunkCreator = (id: number, async: any, isFollow: boolean) => {
    return (dispatch: any) => {
        dispatch(followUnfollowRequestInProgress(true, id))

        return async(id)
            .then((data: any) => {
                if (data.resultCode) {
                    Swal.fire("Oops...", data.messages, "error")
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
    }
}

const getChangedFollowState = (state: initialStateType, action: any, flag: boolean) => {
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
    usersData: [] as any,
    pageSize: 100 as number,
    currentPage: 1 as number,
    usersQuantity: 0 as number,
    maxCurrentPage: 0 as number,
    usersToChangeFollowState: [] as Array<object>,
    isFriends: undefined as undefined | boolean
}

const usersReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case FOLLOW:
            return getChangedFollowState(state, action, true)

        case UNFOLLOW:
            return getChangedFollowState(state, action, false)

        case SET_USERS:
            return { ...state, usersData: [...state.usersData, ...action.users], }

        case UP_CURRENT_PAGE:
            return { ...state, currentPage: state.currentPage + 1, }

        case NULL_USERS:
            return { ...state, usersData: [], currentPage: 1, }

        case SET_USERS_QUANTITY:
            return { ...state, usersQuantity: action.usersQuantity, }

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