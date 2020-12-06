/* Ultrashort name _ for root styles*/
import _ from './Status.module.css'
import React from 'react'

const StatusInput = (props) => {
    return (
        <input className={_.input} onChange={props.addTextToState}
            onBlur={props.onInputBlur} autoFocus={true} type="text" value={props.status} />
    )
}

export default StatusInput