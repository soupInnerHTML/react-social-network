import React from 'react';
import Messages from './Messages';
import { connect } from 'react-redux'
import { sendMessage } from '../../../redux/dialogsReducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import _ from './Messages.module.css'

let mapStateToProps = state => {
    return {
        messagesObject: state.dialogsPage.messagesData.map(messageData => (
            <div key={messageData.id} className={messageData.from ? _.left : _.right}>{messageData.message}</div>
        )),
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = {
    sendMessage
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages)