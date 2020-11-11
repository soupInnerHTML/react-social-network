import AddPost from "./AddPost"
import { connect } from 'react-redux'


let mapStateToProps = state => {
  return {
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = dispatch => {
  return {
    dispatch: action => {
      dispatch(action)
    }
  }
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer