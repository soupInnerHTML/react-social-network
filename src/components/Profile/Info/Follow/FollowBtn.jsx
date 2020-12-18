import React from "react"
import cs from "classnames"

const FollowBtn = (props) => {
    return (
        // TODO пофиксить ошибку при отмене отписки
        <button className={cs(props.className, { fetching: !props.isFetching, })} onClick={props.clickToChangeFollowState}>
            {props.children}
        </button>
    )
}

export default FollowBtn