import Messages from './Messages';
import { connect } from 'react-redux'

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
        dispatch: action => {
            dispatch(action)
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer