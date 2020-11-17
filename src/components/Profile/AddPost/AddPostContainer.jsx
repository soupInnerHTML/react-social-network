import AddPost from "./AddPost"
import { connect } from 'react-redux'
import { addPost, typeNewPost } from '../../../redux/profileReducer'


let mapStateToProps = state => ({
  newPostText: state.profilePage.newPostText
})

let mapDispatchToProps = {
  addPost,
  typeNewPost
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer