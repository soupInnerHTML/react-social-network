export const CREATE_ACTION_SEND_MESSAGE = input => ({
    type: 'sendMessage', 
    input: input
})

let initialState = {
    messagesData : [
        {
            id : 1,
            message: 'Hello world'
        },
        {
            id : 2,
            message: 'Hello world'
        },
        {
            id : 3,
            message: 'Hello world'
        },
        {
            id : 4,
            message: 'Hello world'
        },
        {
            id : 5,
            message: 'Hello world'
        },
        {
            id : 6,
            message: 'Hello world'
        }
    ],
        
    dialogsData : [
        {
            id : 1,
            name : 'Andrey',
            avatar : 'https://sun9-28.userapi.com/impf/3oxrOXkAjBbvQImjNesMCeeoTZcqFteLDusJjA/yIjm5QpHquM.jpg?size=524x606&quality=96&proxy=1&sign=10d5805825dabf5b1b88fb1e008136bd'
        },
        {
            id : 2,
            name : 'Evgeniy',
            avatar : 'https://sun9-9.userapi.com/impf/Ecs7VcxhHxt0AiU3IJTe58QjXH0Fl7wDBWDoSA/AFnkh9I89gA.jpg?size=509x613&quality=96&proxy=1&sign=f5a058d9a66ca8eb1ca2f65c09e4aa6d'
        },
        {
            id : 3,
            name : 'Senya',
            avatar : 'https://sun9-45.userapi.com/impf/DCafG8McWw8qMr4ef4e6Fz114fSYoOquW_yfYQ/EYcl8y1IVxI.jpg?size=810x1080&quality=96&sign=959b56862b895207b84fae6b0d065131'
        }
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_ACTION_SEND_MESSAGE(null).type:
            if(action.input.current.value.length) {
                // console.log(state.messagesData)
                state.messagesData.push({
                    id : 7,
                    message: action.input.current.value
                })
            }
        
            action.input.current.value = null
        break;
    }

    return state
}

export default dialogsReducer