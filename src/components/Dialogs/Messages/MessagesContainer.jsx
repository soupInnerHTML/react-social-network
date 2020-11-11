import Messages from './Messages';
import { connect } from 'react-redux'


// const MessagesContainer = props => {
//     let dispatch = action => {
//         props.store.dispatch(action);
//     }

//     let messagesData = props.store.getState().dialogsPage.messagesData

//     let messagesObject = messagesData.map(messageData => (
//         <div>{messageData.message}</div>
//     ))

//     return (
//         <Messages dispatch={dispatch} messagesObject={messagesObject}></Messages>
//     );
// }

let mapStateToProps = state => {
    return {
        messagesObject: state.dialogsPage.messagesData.map(messageData => (
            <div>{messageData.message}</div>
        ))
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