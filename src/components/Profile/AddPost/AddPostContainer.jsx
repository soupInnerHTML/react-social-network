import AddPost from "./AddPost"
import { connect } from 'react-redux'
import { addPostAC, typeNewPostAC } from '../../../redux/profileReducer'


let mapStateToProps = state => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addPost: input => {
      dispatch(addPostAC(input))
    },
    typeNewPost: input => {
      dispatch(typeNewPostAC(input))
    }
  }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer