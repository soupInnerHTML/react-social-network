/* Ultrashort name _ for root styles*/
import _ from './Status.module.css'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const StatusInput = (props) => {
    let { handleSubmit } = props
    let onInputBlur = () => {
        handleSubmit()
    }
    return (
        <form onSubmit={handleSubmit}>
            <Field component={"input"} className={_.input} type="text" name="status" onBlur={onInputBlur} autoFocus={true}></Field>
        </form>
    )
}

export default reduxForm({
    form: 'status'
})(StatusInput)