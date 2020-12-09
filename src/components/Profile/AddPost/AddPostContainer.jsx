import AddPost from "./AddPost"
import { connect } from 'react-redux'
import { addPost } from '../../../redux/profileReducer'


let mapStateToProps = state => ({
  newPostText: state.profilePage.newPostText,
  profileId: state.profilePage.profileData.userId,
  currentUserId: state.auth.id
})

let mapDispatchToProps = {
  addPost
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer