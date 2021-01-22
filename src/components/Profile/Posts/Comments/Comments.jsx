import React, { useEffect, useRef, useState } from "react"
import _ from "./Comments.module.css"
import { Field, reduxForm } from "redux-form"
import { Send } from "../../../common/Send/Send";
import { submitAndClear } from "../../../../utils/common"
import cs from "classnames"
import Moment from "react-moment";

let CommentsForm = ({ id, handleSubmit, reset, click, isSingle, ...props }) => {
    let [value, setValue] = useState("")
    let focusRef = useRef(null)
    // console.log(props)
    useEffect(() => {
        if (click) {
            focusRef.current.focus()
        }
    }, [click])

    useEffect(() => {
        if (isSingle) {
            focusRef.current.focus()
        }
    }, [isSingle])

    let onCommentsFromSubmit = (e) => {
        setValue("")
        !value && focusRef.current.focus();
        submitAndClear(e, handleSubmit, reset)
    }

    let InputWithRef = ({ meta, input, ...props }) => {
        return <input { ...props } { ...input } ref={ focusRef } type="text"/>
    }

    return (
        <form onSubmit={ onCommentsFromSubmit } className={ _.form }>
            <Field className={ cs("inp", _.commentInput) } component={ InputWithRef } placeholder="Добавить замечание"
                name={ "comment" + id }/>
            <Send className={ _.sendComment } input={ !value }/>
        </form>
    )
}


let CommentsReduxForm = reduxForm({
    form: "comments",
})(CommentsForm)

export const Comments = ({ comments, id, photos, socket, fullName, click, formComments, ...props }) => {

    let formProps = {
        id,
        click,
        // value: formComments?.values,
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