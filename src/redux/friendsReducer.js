export const followAC = id => ({
    type: 'follow',
    id
})

export const unfollowAC = id => ({
    type: 'unfollow',
    id
})

let initialState = {
    friendsData: [
        {
            id: 1,
            isFollowed: true,
            name: 'Andrey',
            avatar: 'https://sun9-28.userapi.com/impf/3oxrOXkAjBbvQImjNesMCeeoTZcqFteLDusJjA/yIjm5QpHquM.jpg?size=524x606&quality=96&proxy=1&sign=10d5805825dabf5b1b88fb1e008136bd'
        },
        {
            id: 2,
            isFollowed: true,
            name: 'Evgeniy',
            avatar: 'https://sun9-9.userapi.com/impf/Ecs7VcxhHxt0AiU3IJTe58QjXH0Fl7wDBWDoSA/AFnkh9I89gA.jpg?size=509x613&quality=96&proxy=1&sign=f5a058d9a66ca8eb1ca2f65c09e4aa6d'
        },
        {
            id: 3,
            isFollowed: false,
            name: 'Senya',
            avatar: 'https://sun9-45.userapi.com/impf/DCafG8McWw8qMr4ef4e6Fz114fSYoOquW_yfYQ/EYcl8y1IVxI.jpg?size=810x1080&quality=96&sign=959b56862b895207b84fae6b0d065131'
        }
    ]
}

const friendsReducer = (state = initialState, action) => {

    let copyState = Object.assign({}, state)

    switch (action.type) {
        case followAC(null).type:
            return

        case unfollowAC(null).type:
            return

        default:
            return state
    }
}

export default friendsReducer