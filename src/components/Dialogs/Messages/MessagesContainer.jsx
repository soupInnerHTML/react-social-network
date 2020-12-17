import React from "react";
import Messages from "./Messages";
import { connect } from "react-redux"
import { sendMessage } from "../../../redux/dialogsReducer"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import _ from "./Messages.module.css"

let mapStateToProps = state => {
    return {
        messagesObject: state.dialogsPage.messagesData.map(messageData => {
            let { id, from, message, } = messageData
            return <div key={id} className={from ? _.left : _.right}>{message}</div>
        }),
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = {
    sendMessage,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages)