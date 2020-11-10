/* Ultrashort name _ for root styles*/
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import _ from './Dialogs.module.css'
import Messages from './Messages/Messages';

const Dialogs = props => {
    return (
        <main className="App-main">
            <section className={_.dialogs_items + " App-block"}>
                <DialogItem dialogsData={props.dialogsState.dialogsData}></DialogItem>
                <Messages dispatch={props.dispatch} messagesData={props.dialogsState.messagesData}></Messages>
            </section>
        </main>
    );
}

export default Dialogs