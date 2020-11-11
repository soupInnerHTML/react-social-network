/* Ultrashort name _ for root styles*/
import _ from './AddPost.module.css'
import React from 'react'
import { CREATE_ACTION_ADD_POST, CREATE_ACTION_TYPE_NEW_POST } from '../../../redux/profileReducer'


const AddPost = props => {
  // debugger
  let addPost = e => {
    e.preventDefault()

    props.dispatch(CREATE_ACTION_ADD_POST(input))
  }

  let textChange = () => {
    props.dispatch(CREATE_ACTION_TYPE_NEW_POST(input))
  }

  let input = React.createRef()

  return (
    <section className="App-block">
      <form className={_.addPost}>
        <textarea ref={input} type="text" className={_.text}
          placeholder="Что у вас нового?" onChange={textChange} value={props.newPostText} />

        <hr className={"separator " + _.topLine} />

        <button onClick={addPost} className={_.submit}>Опубликовать</button>
      </form>
    </section>
  )


}

export default AddPost