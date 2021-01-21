/* Ultrashort name _ for root styles*/
import _ from "./AddPost.module.css"
import React, { useEffect, useRef, useState } from "react"
import { Field, reduxForm } from "redux-form"
import cs from "classnames"
import autosize from "autosize"

export const TextareaWithRef = ({ meta, ...props }) => {
    let autosizeRef = useRef(null)

    useEffect(() => {
        autosize(autosizeRef.current)
    })
    
    return (
        <textarea { ...props } ref={ autosizeRef }></textarea>
    )
}


const AddPostForm = (props) => {
    const { handleSubmit, reset, } = props
    let [isFocused, setFocus] = useState(false)

    let submitAndClear = e => {
        e.preventDefault()
        handleSubmit()
        reset()
        setFocus(false)
    }

    let toggle = {
        onFocus: () => {
            setFocus(true)
        },
        onBlur: (e) => {
            setFocus(false)
        },
    }

    return (
        <form { ...toggle } className={ cs(_.addPost, { [_.blur]: !isFocused, }) } onSubmit={ submitAndClear }>
            <Field component={ TextareaWithRef } name="addPost" className={ _.text } placeholder="Что у вас нового?"></Field>

            <div className={ _.hideGroup }>
                <hr className={ cs("separator", _.topLine) } />
                <button type="submit" className={ _.submit }>Опубликовать</button>
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
            <AddPostReduxForm onSubmit={ addPost }></AddPostReduxForm>
        </section>
    )


}

export default AddPost