/* Ultrashort name _ for root styles*/
import _ from './Messages.module.css'
import React from 'react'
import SendImgPath from './img/send.svg'

const Messages = props => {
    let postTextChange = () => {
        props.typeNewMessage(messageInput)
    }

    let sendMessage = () => {
        props.sendMessage(messageInput)
    }

    let messageInput = React.createRef()

    return (
        <div className={_.messagesItems}>
            <div className={_.layer}>
                <div className={_.messages}>
                    {props.messagesObject}
                </div>
            </div>

            <input ref={messageInput} onChange={postTextChange} value={props.newMessageText} className={_.messageText}
                type="text" placeholder="Write a message..." />

            <button className={_.send} onClick={sendMessage}>
                <img src={SendImgPath} alt="" />
            </button>
        </div>
    );
}

export default Messages