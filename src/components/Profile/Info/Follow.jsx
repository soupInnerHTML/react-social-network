import React from "react"
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { withFollowUser } from "../../../hoc/withFollowUser"

const Follow = props => {
    let clickToChangeFollowState = () => {
        props.changeFollowState(props.followed, props.match.params.userId)
    }

    return (
        <>
            {props.followed !== undefined && <button onClick={clickToChangeFollowState}>{props.followed ? 'Отписаться' : 'Подписаться'}</button>}
        </>
    )
}

export default compose(withFollowUser, withRouter)(Follow)