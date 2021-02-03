import {messageType} from "../types/commonTypes";

export type initialStateType = typeof initialState

type dialogType = {
    id: number,
    name: string,
    avatar: string | null
}

const SET_MESSAGES = "dialogsReducer/sendMessage"

export const setMessages = (messages: object) => ({
    type: SET_MESSAGES,
    messages,
})

let initialState = {
    messagesData: [] as Array<messageType>,

    dialogsData: [
        // {
        //     id: 1,
        //     name: "Andrey",
        //     avatar: "https://sun9-28.userapi.com/impf/3oxrOXkAjBbvQImjNesMCeeoTZcqFteLDusJjA/yIjm5QpHquM.jpg?size=524x606&quality=96&proxy=1&sign=10d5805825dabf5b1b88fb1e008136bd",
        // },
        // {
        //     id: 2,
        //     name: "Evgeniy",
        //     avatar: "https://sun9-9.userapi.com/impf/Ecs7VcxhHxt0AiU3IJTe58QjXH0Fl7wDBWDoSA/AFnkh9I89gA.jpg?size=509x613&quality=96&proxy=1&sign=f5a058d9a66ca8eb1ca2f65c09e4aa6d",
        // },
        // {
        //     id: 3,
        //     name: "Senya",
        //     avatar: "https://sun9-45.userapi.com/impf/DCafG8McWw8qMr4ef4e6Fz114fSYoOquW_yfYQ/EYcl8y1IVxI.jpg?size=810x1080&quality=96&sign=959b56862b895207b84fae6b0d065131",
        // }
        {
            id: 1,
            name: "Самураи",
            avatar: "https://yt3.ggpht.com/ytc/AAUvwnhcOYdTa8LLrCrXBvmGL2kd1pP1xiGLChGUaz4KGA=s900-c-k-c0x00ffffff-no-rj",
        }
    ] as Array<dialogType>,
}

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messagesData: [...state.messagesData, ...action.messages]
            }

        default:
            return state
    }

}

export default dialogsReducer