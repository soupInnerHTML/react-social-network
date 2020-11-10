export const CREATE_ACTION_SEND_MESSAGE = input => ({
    type: 'sendMessage', 
    input: input
})

const dialogsReducer = (action, state) => {
    switch(action.type){
        case CREATE_ACTION_SEND_MESSAGE(null).type:
            if(action.input.current.value.length) {
                state.dialogsPage.messagesData.push({
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