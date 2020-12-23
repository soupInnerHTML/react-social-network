import AddPost from "./AddPost"
import { connect } from "react-redux"
import { addPost } from "../../../redux/profileReducer"
import { withOwner } from "../../../hoc/withOwner"
import { compose } from "redux"
import { getAuthId, getProfileId } from "../../../redux/usersSelectors"


let mapStateToProps = state => ({
    profileId: getProfileId(state),
    currentUserId: getAuthId(state),
})

let mapDispatchToProps = {
    addPost,
}

const AddPostContainer = compose(connect(mapStateToProps, mapDispatchToProps), withOwner(true))(AddPost)

export default AddPostContainer