import Messages from "./Messages";
import { connect } from "react-redux"
import { setMessages } from "../../../redux/dialogsReducer"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getFormMessages, getMessagesObject } from "../../../redux/usersSelectors";

let mapStateToProps = state => {
    return {
        messagesObject: getMessagesObject(state),
        messages: getFormMessages(state),
    }
}

let mapDispatchToProps = {
    setMessages,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages)