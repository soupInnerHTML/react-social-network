import AddPost from "./AddPost"
import { connect } from 'react-redux'
import { CREATE_ACTION_ADD_POST, CREATE_ACTION_TYPE_NEW_POST } from '../../../redux/profileReducer'


let mapStateToProps = state => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = dispatch => {
  return {
    addPost: input => {
      dispatch(CREATE_ACTION_ADD_POST(input))
    },
    typeNewPost: input => {
      dispatch(CREATE_ACTION_TYPE_NEW_POST(input))
    }
  }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer