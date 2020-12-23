import React from "react"
import { withOwner } from "../../../../hoc/withOwner"
import { EditAvatar } from "./EditAvatar"
import { saveAvatarTC } from "../../../../redux/profileReducer"
import { compose } from "redux"
import { connect } from "react-redux"

let mapDispatchToProps = {
    saveAvatarTC,
}

export default compose(connect(null, mapDispatchToProps), withOwner(true))(EditAvatar)