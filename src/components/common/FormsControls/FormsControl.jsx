import React from 'react'
import _ from './FormsControl.module.css'

const Wrapper = (props) => {
    return (
        <div className={_.login}>
            {props.children}
            {props.touched && props.error}
        </div>
    )
}

export const ValInput = ({meta, input, ...props}) => {
    return (
        <Wrapper {...meta}>
            <input {...input} {...props}/>
        </Wrapper>
    )
}