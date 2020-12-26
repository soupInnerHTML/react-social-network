import React, { Component } from "react"
import { connect } from "react-redux";
import { addComment } from "../../../../redux/profileReducer";
import { getMyId, getMyName, getMyPhotos } from "../../../../redux/usersSelectors";
import { Comments } from "../Comments/Comments";

class CommentsContainer extends Component {
    render() {
        let { props, } = this
        return (
            <Comments {...props}></Comments>
        )
    }
}

let mapStateToProps = state => ({
    photos: getMyPhotos(state),
    fullName: getMyName(state),
    myId: getMyId(state),
})

let mapDispatchToProps = {
    addComment,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)