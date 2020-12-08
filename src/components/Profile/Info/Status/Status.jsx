/* Ultrashort name _ for root styles*/
import _ from './Status.module.css'

import React from "react"

const Status = (props) => {
    return (
        <p className={props.isMyProfile ? _.status : 'outerStatus'} onClick={props.onStatusClick}>
            <span className={_.hash}># </span>
            {props.status}
        </p>
    )
}

export default Status