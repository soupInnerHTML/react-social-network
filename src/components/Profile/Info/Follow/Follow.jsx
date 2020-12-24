import React, { useState } from "react"
import _ from "./Follow.module.css";
import { compose } from "redux"
import { withFollowUser } from "../../../../hoc/withFollowUser"
import { withAuthRender } from "../../../../hoc/withAuthRender";
import FollowBtn from "./FollowBtn";
import { withFetching } from "../../../../hoc/withFetching";
import { withOwner } from "../../../../hoc/withOwner";

const Follow = (props) => {
    let { isFetching, } = props
    
    let clickToChangeFollowState = async () => {
        // (async() => {
        props.setFetching(false)
        await props.changeFollowState(props.followed, props.match.params.userId)
        props.setFetching(true)
        // })()
    }

    if (props.followed) {
        return (
            <FollowBtn {...{ clickToChangeFollowState, isFetching, }} className={_.unfollow}>Отписаться</FollowBtn>
        )
    }
    else {
        return (
            <FollowBtn {...{ clickToChangeFollowState, isFetching, }} className={_.follow}>Подписаться</FollowBtn>
        )
    }
}

// TODO добавить sweet alert

export default compose(withFetching(), withFollowUser, withAuthRender, withOwner())(Follow)