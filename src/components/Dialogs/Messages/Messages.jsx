/* Ultrashort name _ for root styles*/
import _ from "./Messages.module.css"
import React from "react"
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

    return (
        <div className={_.messagesItems}>
            <div className={_.layer}>
                <div className={_.messages}>
                    {props.messagesObject}
                </div>
            </div>

            <MessageSendReduxForm onSubmit={sendMessage}></MessageSendReduxForm>
        </div>
    );
}

export default Messages