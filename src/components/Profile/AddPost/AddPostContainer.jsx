import AddPost from "./AddPost"

const AddPostContainer = props => {
    let dispatch = props.store.dispatch.bind(props.store)
  
    return (
      <AddPost dispatch={dispatch}></AddPost>
    )
  
      
  }
  
  export default AddPostContainer