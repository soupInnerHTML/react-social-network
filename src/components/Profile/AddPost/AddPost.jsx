/* Ultrashort name _ for root styles*/
import _ from './AddPost.module.css'
import React from 'react'
import {CREATE_ACTION_ADD_POST} from '../../../redux/state'

const AddPost = props => {
  let addPost = e => {
    e.preventDefault()

    props.dispatch(CREATE_ACTION_ADD_POST(input))
  },

  textChange = () => {
    console.log(input.current.value)
  },
  
  input = React.createRef()

  return (
    <section className="App-block">
      <form className={_.addPost}>
        <textarea ref={input} type="text" className={_.text} 
        placeholder="Что у вас нового?" onChange={textChange} />

        <hr className={"separator " + _.topLine} />

        <button onClick={addPost} className={_.submit}>Опубликовать</button>
      </form>
    </section>
  )

    
}

export default AddPost