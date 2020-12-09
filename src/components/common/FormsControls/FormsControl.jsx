import React from 'react'
import _ from './FormsControl.module.css'

export const LoginInput = (props) => {
    return (
        <div className={_.login}>
            <input type="text" {...props} />
            {props.meta.touched && props.meta.error && 'Error'}
        </div>
    )
}