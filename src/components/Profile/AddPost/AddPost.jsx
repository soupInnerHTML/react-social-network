/* Ultrashort name _ for root styles*/
import _ from "./AddPost.module.css"
import React from "react"
import { Field, reduxForm } from "redux-form"
import cs from "classnames"

const AddPostForm = (props) => {
    const { handleSubmit, reset, } = props
    let [isFocused, setFocus] = React.useState(false)

    let submitAndClear = e => {
        e.preventDefault()
        handleSubmit()
        reset()
        setFocus(false)
    }

    let s = {
        onFocus: () => {
            console.log("focus")
            setFocus(true)
        },
        onBlur: (e) => {
            console.log(e.target.tagName)
            setFocus(false)
        },
    }

    return (
        <form {...s} className={ cs(_.addPost, { [_.blur]: !isFocused, }) } onSubmit={submitAndClear}>
            <Field component="textarea" name="addPost" className={_.text} placeholder="Что у вас нового?"></Field>

            <div className={_.hideGroup}>
                <hr className={cs("separator", _.topLine)} />
                <button type="submit" className={_.submit}>Опубликовать</button>
            </div>
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