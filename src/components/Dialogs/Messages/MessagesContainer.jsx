import Messages from './Messages';

const MessagesContainer = props => {

    let dispatch = action => {
        props.store.dispatch(action);
    },

    messagesData = props.store.getState().dialogsPage.messagesData

    return (
        <Messages dispatch={dispatch} messagesData={messagesData}></Messages>
    );
}

export default MessagesContainer