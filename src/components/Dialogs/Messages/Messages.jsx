// import { NavLink } from 'react-router-dom';
/* Ultrashort name _ for root styles*/
import _ from './Messages.module.css'
import React from 'react'
import SendImgPath from './img/send.svg'
import {CREATE_ACTION_SEND_MESSAGE} from '../../../redux/dialogsReducer'

const Messages = props => {
    let messagesObject = props.messagesData.map(messageData => {
        return <div>{messageData.message}</div>
    }),

    getText = () => {
        console.log(input.current.value)
    },

    sendMessage = () => {
        props.dispatch(CREATE_ACTION_SEND_MESSAGE(input))
        
    },

    input = React.createRef()

    return (
        <div className={_.messagesItems}>
            <div className={_.layer}>
                <div className={_.messages}>
                    {messagesObject}
                </div>
            </div>

            <input ref={input} onKeyPress={getText} className={_.messageText} type="text" placeholder="Write a message..."/>
            <button className={_.send} onClick={sendMessage}>
                <img src={SendImgPath} alt=""/>
            </button>
        </div>
    );
}

export default Messages