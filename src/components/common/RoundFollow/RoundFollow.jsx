import _ from "./RoundFollow.module.css"
import React from "react"
import { withAuthRender } from "../../../hoc/withAuthRender"
import cs from "classnames"

let RoundFollow = props => {
    let clickToChangeFollowState = () => (
        props.changeFollowState(props.followed, props.id)
    )

    return (
        <button className={ cs(_.round, (props.followed ? _.unfollow : _.follow) ) }
            onClick={ clickToChangeFollowState } disabled={ props.usersToChangeFollowState.includes(props.id) }></button>
    )
}

export default withAuthRender(RoundFollow)