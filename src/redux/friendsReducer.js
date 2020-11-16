const FOLLOW = 'follow'
const UNFOLLOW = 'unfollow'
const SET_USERS = 'setUsers'
const UP_CURRENT_PAGE = 'setCurrentPage'

export const followAC = id => ({
    type: FOLLOW,
    id,
})

export const unfollowAC = id => ({
    type: UNFOLLOW,
    id,
})

export const setUsersAC = users => ({
    type: SET_USERS,
    users,
})

export const upCurrentPageAC = () => ({
    type: UP_CURRENT_PAGE,
})

let initialState = {
    friendsData: [],
    pageSize: 50,
    currentPage: 1,
}

const friendsReducer = (state = initialState, action) => {

    let copyState = JSON.parse(JSON.stringify(state))


    switch (action.type) {
        case FOLLOW:
            copyState.friendsData.forEach(friend => friend.id === action.id ? friend.isFollowed = true : 0)
            break

        case UNFOLLOW:
            let areYouSure = window.confirm('Вы уверены что хотите удалить этого пользователя из друзей?')
            if (areYouSure) {
                copyState.friendsData.forEach(friend => friend.id === action.id ? friend.isFollowed = false : 0)
            }
            break

        case SET_USERS:
            copyState.friendsData.push(...action.users)
            break

        case UP_CURRENT_PAGE:
            copyState.currentPage++
            break

        default:
            return copyState
    }
    return copyState
}

export default friendsReducer