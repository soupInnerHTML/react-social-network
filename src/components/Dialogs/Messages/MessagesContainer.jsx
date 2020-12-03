import Messages from './Messages';
import { connect } from 'react-redux'
import { typeNewMessage, sendMessage } from '../../../redux/dialogsReducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages)