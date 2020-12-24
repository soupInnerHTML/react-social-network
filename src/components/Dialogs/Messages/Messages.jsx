/* Ultrashort name _ for root styles*/
import _ from "./Messages.module.css"
import React, { useEffect, useRef } from "react"
import SendImgPath from "../../../img/send.svg"
import { Field, reduxForm } from "redux-form"

const MessageSendForm = (props) => {
    const { handleSubmit, reset, } = props

    let submitAndClear = e => {
        e.preventDefault()
        handleSubmit()
        reset()
    }

    return (
        <form onSubmit={submitAndClear}>
            <Field className={_.messageText} name="message" placeholder="Write a message..." component="input"></Field>

            <button className={_.send} type="submit">
                <img src={SendImgPath} alt="" />
            </button>
        </form>
    )
}

const MessageSendReduxForm = reduxForm({
    form: "messages",
})(MessageSendForm)


const Messages = props => {
    let sendMessage = values => {
        props.sendMessage(values.message)
    }

    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth", block: "nearest", });
    });

    return (
        <div className={_.messagesItems}>
            <div className={_.messages}>
                <div className={_.inner}>
                    {props.messagesObject}
                    <div className={_.scroll} ref={divRef}></div>
                </div>
            </div>

            <MessageSendReduxForm onSubmit={sendMessage}></MessageSendReduxForm>
        </div>
    );
}

export default Messages