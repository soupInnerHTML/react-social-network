import Messages from './Messages';
import { connect } from 'react-redux'
import { sendMessageAC, typeNewMessageTextAC } from '../../../redux/dialogsReducer'

let mapStateToProps = state => {
    return {
        messagesObject: state.dialogsPage.messagesData.map(messageData => (
            <div key={messageData.id}>{messageData.message}</div>
        )),
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = dispatch => {
    return {
        typeNewMessage: input => {
            dispatch(typeNewMessageTextAC(input))
        },
        sendMessage: input => {
            dispatch(sendMessageAC(input))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer