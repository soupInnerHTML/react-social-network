import React from 'react'
import _ from './FormsControl.module.css'

const Wrapper = (props) => {
    return (
        <div className={_.login}>
            {props.children}
            {props.touched && props.error &&
            <div className={_.error} style={{animation: 'fade 1s',}}>
                {props.error}
            </div>}
        </div>
    )
}

export const ValInput = ({meta, input, ...props}) => {
    let some = el => {
        // console.log(el)
    }
    return (
        <Wrapper {...meta}>
            <input {...input} {...props} onClick={some}/>
        </Wrapper>
    )
}