import React, { useEffect, useRef, useState } from "react"
import _ from "./Comments.module.css"
import { Field, reduxForm } from "redux-form"
import { Send } from "../../../common/Send/Send";
import { submitAndClear } from "../../../../utils/common"
import cs from "classnames"
import Moment from "react-moment";

let CommentsForm = ({ id, handleSubmit, reset, click, isSingle, ...props }) => {
    let [value, setValue] = useState("")
    let ref = useRef(null)
    useEffect(() => {
        ref.current.focus()
    }, [click])

    useEffect(() => {
        if (isSingle) {
            ref.current.focus()
        }
    })

    let onCommentsFromSubmit = (e) => {
        setValue("")
        !value && ref.current.focus();
        submitAndClear(e, handleSubmit, reset)
    }

    let InputWithRef = ({ meta, input, ...props }) => {
        return <input { ...props } { ...input } ref={ ref } type="text"/>
    }

    return (
        <form onSubmit={ onCommentsFromSubmit } className={ _.form }>
            <Field className={ cs("inp", _.commentInput) } onChange={ e => setValue(e.target.value) } component={ InputWithRef } placeholder="Добавить замечание" name={ "comment" + id }></Field>
            <Send className={ _.sendComment } input={ !value }></Send>
        </form>
    )
}

let CommentsReduxForm = reduxForm({
    form: "comments",
})(CommentsForm)

export const Comments = ({ comments, id, photos, socket, fullName, click, ...props }) => {

    let formProps = {
        id,
        click,
        onSubmit: e => props.addComment(e["comment" + id], id),
    }

    if (comments.length) {
        return (
            <section className={ _.comments }>
                <div className={ _.commentsFlow }>
                    <hr className="separator"/>
                    { comments.map(comment => (
                        <div className={ _.meta } key={ comment.id }>
                            <img className='avatar' src={ (photos && photos.small) || socket } alt="" />
                            <div className={ _.meta__text }>
                                <a href={ "profile/" + props.myId } className={ _.name }>{ fullName }</a>
                                <p>{ comment.text }</p>
                                <Moment fromNow>{ comment.date }</Moment>
                            </div>
                        </div>

                    )) }
                </div>
    
                <div>
                    <CommentsReduxForm { ...formProps }></CommentsReduxForm>
                </div>
            </section>
        )
    }
    else {
        return (
            !!click && <section className={ _.comments }>
                <CommentsReduxForm { ...formProps } isSingle={ true }></CommentsReduxForm>
            </section>
        )
    }
}