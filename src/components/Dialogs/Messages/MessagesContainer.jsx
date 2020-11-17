import Messages from './Messages';
import { connect } from 'react-redux'
import { typeNewMessage, sendMessage } from '../../../redux/dialogsReducer'

let mapStateToProps = state => {
    return {
        messagesObject: state.dialogsPage.messagesData.map(messageData => (
            <div key={messageData.id}>{messageData.message}</div>
        )),
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = {
    typeNewMessage,
    sendMessage
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer