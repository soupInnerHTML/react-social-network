/* Ultrashort name _ for root styles*/
import _ from "./Messages.module.css"
import React, { useEffect, useRef } from "react"
import { Field, reduxForm } from "redux-form"
import cs from "classnames"
import { Send } from "../../common/Send/Send"

const MessageSendForm = (props) => {
    const { handleSubmit, reset, messages, } = props

    let submitAndClear = e => {
        e.preventDefault()
        handleSubmit()
        reset()
    }

    return (
        <form onSubmit={submitAndClear}>
            <Field className={_.messageText} name="message" placeholder="Write a message..." component="input"></Field>
            <Send input={messages}></Send>
        </form>
    )
}

const MessageSendReduxForm = reduxForm({
    form: "messages",
})(MessageSendForm)


const Messages = ({ messages, ...props }) => {
    let sendMessage = values => {
        props.sendMessage(values.message)
    }

    const scrollRef = useRef(null);

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", });
    });

    return (
        <div className={_.messagesItems}>
            <div className={_.messages}>
                <div className={_.inner}>
                    {props.messagesObject}
                    <div className={_.scroll} ref={scrollRef}></div>
                </div>
            </div>

            <MessageSendReduxForm onSubmit={sendMessage} {...{ messages, }}></MessageSendReduxForm>
        </div>
    );
}

export default Messages