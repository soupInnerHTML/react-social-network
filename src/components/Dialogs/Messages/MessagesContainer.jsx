import Messages from './Messages';
import { connect } from 'react-redux'
import { CREATE_ACTION_SEND_MESSAGE, CREATE_ACTION_TYPE_NEW_MESSAGE } from '../../../redux/dialogsReducer'

let mapStateToProps = state => {
    return {
        messagesObject: state.dialogsPage.messagesData.map(messageData => (
            <div>{messageData.message}</div>
        )),
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = dispatch => {
    return {
        typeNewMessage: input => {
            dispatch(CREATE_ACTION_TYPE_NEW_MESSAGE(input))
        },
        sendMessage: input => {
            dispatch(CREATE_ACTION_SEND_MESSAGE(input))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer