import React from "react"
import cs from "classnames"
import _ from "./Follow.module.css";

const FollowBtn = (props) => {
    return (
        <button className={ cs(props.className, { [_.fetching]: !props.isFetching, }) } onClick={ props.clickToChangeFollowState }>
            { props.children }
        </button>
    )
}

export default FollowBtn