import React, { useState } from "react"
import _ from "./Follow.module.css";
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { withFollowUser } from "../../../../hoc/withFollowUser"
import { withAuthRender } from "../../../../hoc/withAuthRender";
import FollowBtn from "./FollowBtn";

const Follow = (props) => {

    let [isFollowBtnfetching, followBtnWasFetched] = useState(false)
    

    let clickToChangeFollowState = () => {
        props.changeFollowState(props.followed, props.match.params.userId)
            .then(() => {
                followBtnWasFetched(false)
            })
        
        followBtnWasFetched(true)
    }

    let followBtnJsx = () => {
        if (props.followed !== undefined) {
            if (props.followed) {
                return (
                    <FollowBtn {...{ clickToChangeFollowState, isFollowBtnfetching, }} className={_.unfollow}>Отписаться</FollowBtn>
                )
            }
            else {
                return (
                    <FollowBtn {...{ clickToChangeFollowState, isFollowBtnfetching, }} className={_.follow}>Подписаться</FollowBtn>
                )
            }
        }

        else {
            return <></>
        }
    }

    return followBtnJsx()
}

// TODO добавить sweet alert

export default compose(withFollowUser, withRouter, withAuthRender)(Follow)