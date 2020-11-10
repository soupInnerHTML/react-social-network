export const CREATE_ACTION_ADD_POST = input => ({
    type: 'addPost', 
    input: input
})

const profileReducer = (action, state) => {
    
    switch(action.type){
        case CREATE_ACTION_ADD_POST(null).type:
            if(action.input.current.value.length) {
                state.profilePage.postsData.push({
                    id : 7,
                    likes : 0,
                    text: action.input.current.value
                })
            }
            action.input.current.value = null
        break;
    }

    return state
}

export default profileReducer