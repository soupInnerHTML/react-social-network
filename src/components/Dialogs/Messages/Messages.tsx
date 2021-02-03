/* Ultrashort name _ for root styles*/
import _ from "./Messages.module.css"
import React, { useEffect, useRef } from "react"
import { Field, reduxForm } from "redux-form"
import { Send } from "../../common/Send/Send"
import { messageType } from "../../../types/commonTypes";

type MessagesPropsType = {
    messagesObject: object,
    messages: object | undefined,
    setMessages: (arg: Array<messageType>) => void
}
type valuesType = {
    message: string
}

const ws: WebSocket = new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx")

const MessageSendForm = (props: any) => {
    const { handleSubmit, reset, messages, } = props

    let submitAndClear = (e: any ) => {
        e.preventDefault()
        handleSubmit()
        reset()
    }

    return (
        <form onSubmit={ submitAndClear }>
            <Field className={ _.messageText } name="message" placeholder="Write a message..." component="input"/>
            <Send socketState={ ws.readyState !== WebSocket.OPEN } input={ messages }/>
        </form>
    )
}

const MessageSendReduxForm = reduxForm({
    form: "messages",
})(MessageSendForm)

const Messages: React.FC<MessagesPropsType> = ({ messages, ...props }) => {

    useEffect(() => {
        ws.addEventListener("message", (e) => {
            // console.log("new message")
            props.setMessages(JSON.parse(e.data))
        })
    }, [])

    let _sendMessage: any = (values: valuesType) => {
        const { message, } = values
        message && ws.send(message)
    }

    const scrollRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        scrollRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", });
    });

    return (
        <div className={ _.messagesItems }>
            <div className={ _.messages }>
                <div className={ _.inner }>
                    { props.messagesObject }
                    <div className={ _.scroll } ref={ scrollRef }/>
                </div>
            </div>

            <MessageSendReduxForm onSubmit={ _sendMessage } { ...{ messages, } }/>
        </div>
    );
}

export default Messages