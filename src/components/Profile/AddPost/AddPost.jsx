/* Ultrashort name _ for root styles*/
import _ from "./AddPost.module.css"
import React from "react"
import { Field, reduxForm } from "redux-form"

const AddPostForm = (props) => {
    const { handleSubmit, reset, } = props

    let submitAndClear = e => {
        e.preventDefault()
        handleSubmit()
        reset()
    }

    return (
        <form className={_.addPost} onSubmit={submitAndClear}>
            <Field component="textarea" name="addPost" className={_.text} placeholder="Что у вас нового?"></Field>

            <hr className={"separator " + _.topLine} />

            <button type="submit" className={_.submit}>Опубликовать</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({
    form: "addPost",
})(AddPostForm)


const AddPost = props => {
    let addPost = values => {
        props.addPost(values.addPost)
    }

    return (
        <section className="App-block">
            <AddPostReduxForm onSubmit={addPost}></AddPostReduxForm>
        </section>
    )


}

export default AddPost