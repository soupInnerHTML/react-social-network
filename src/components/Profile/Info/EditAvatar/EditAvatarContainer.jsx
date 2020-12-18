import React from "react"
import { withOwner } from "../../../../hoc/withOwner"
import { EditAvatarPure } from "./EditAvatar"
import { saveAvatarTC } from "../../../../redux/profileReducer"
import { compose } from "redux"
import { connect } from "react-redux"

const EditAvatar = (props) => {
    
    return (
        <EditAvatarPure {...props}></EditAvatarPure>
    )
}

let mapDispatchToProps = {
    saveAvatarTC,
}

export default compose(connect(null, mapDispatchToProps), withOwner(true))(EditAvatar)