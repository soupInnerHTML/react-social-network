/* Ultrashort name _ for root styles*/
import _ from './AddPost.module.css'
import React from 'react'


const AddPost = props => {
  let addPost = e => {
    e.preventDefault()

    props.addPost(postInput.current.value)
  }

  let messageTextChange = () => {
    props.typeNewPost(postInput.current.value)
  }

  let postInput = React.createRef()

  // let some = e => console.log(e)

  return (
    <section className="App-block">
      <form className={_.addPost}>
        <textarea ref={postInput} type="text" className={_.text}
          placeholder="Что у вас нового?" onChange={messageTextChange} value={props.newPostText} />


        <hr className={"separator " + _.topLine} />

        <button onClick={addPost} className={_.submit}>Опубликовать</button>
      </form>
    </section>
  )


}

export default AddPost