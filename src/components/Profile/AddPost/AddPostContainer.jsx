import AddPost from "./AddPost"
import { connect } from 'react-redux'

// const AddPostContainer = props => {
//     let dispatch = props.store.dispatch.bind(props.store)

//     return (
//       <AddPost dispatch={dispatch}></AddPost>
//     )


//   }


let mapStateToProps = state => {
  return {

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