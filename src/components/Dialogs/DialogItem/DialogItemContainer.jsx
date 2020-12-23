import DialogItem from "./DialogItem"
import { connect } from "react-redux"
import { getDialogsObject } from "../../../redux/usersSelectors"

let mapStateToProps = (state) => ({
    dialogsObject: getDialogsObject(state),
})

let mapDispatchToProps = {}

const DialogItemContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItem)
export default DialogItemContainer