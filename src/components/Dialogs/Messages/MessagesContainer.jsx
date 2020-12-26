import React from "react";
import Messages from "./Messages";
import { connect } from "react-redux"
import { sendMessage } from "../../../redux/dialogsReducer"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import _ from "./Messages.module.css"
import { getFormMessages, getMessagesObject } from "../../../redux/usersSelectors";

let mapStateToProps = state => {
    return {
        messagesObject: getMessagesObject(state),
        messages: getFormMessages(state),
    }
}

let mapDispatchToProps = {
    sendMessage,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages)