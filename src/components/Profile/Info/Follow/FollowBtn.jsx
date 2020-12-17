import React from "react"

const FollowBtn = (props) => {
    return (
        <button className={`${props.className} ${props.isFetching ? "" : "fetching"}`} onClick={props.clickToChangeFollowState}>
            {props.children}
        </button>
    )
}

export default FollowBtn