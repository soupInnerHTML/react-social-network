/* Ultrashort name _ for root styles*/
import _ from './Dialogs.module.css'
import React from 'react';
import DialogItemContainer from './DialogItem/DialogItemContainer';
import MessagesContainer from './Messages/MessagesContainer';

const Dialogs = (props) => {
    return (
        <main className="App-main">
            <section className={_.dialogs_items + ' App-block'}>
                <DialogItemContainer></DialogItemContainer>
                <MessagesContainer></MessagesContainer>
            </section>
        </main>
    );
}

export default Dialogs