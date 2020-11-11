/* Ultrashort name _ for root styles*/
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import _ from './Dialogs.module.css'
// import Messages from './Messages/Messages';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = props => {
    return (
        <main className="App-main">
            <section className={_.dialogs_items + " App-block"}>
                <DialogItem dialogsData={props.store.getState().dialogsPage.dialogsData}></DialogItem>
                <MessagesContainer store={props.store}></MessagesContainer>
                {/* <Messages dispatch={props.dispatch} messagesData={props.dialogsState.messagesData}></Messages> */}
            </section>
        </main>
    );
}

export default Dialogs