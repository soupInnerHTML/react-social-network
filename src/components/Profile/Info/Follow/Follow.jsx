import React, { useState } from "react"
import _ from "./Follow.module.css";
import { withRouter } from "react-router-dom"
import { compose } from "redux"
import { withFollowUser } from "../../../../hoc/withFollowUser"
import { withAuthRender } from "../../../../hoc/withAuthRender";
import FollowBtn from "./FollowBtn";
import { withFetching } from "../../../../hoc/withFetching";

const Follow = (props) => {
    let { isFetching, } = props
    
    let clickToChangeFollowState = () => {
        props.setFetching(false)
        props.changeFollowState(props.followed, props.match.params.userId)
            .then(() => {
                props.setFetching(true)
            })
    }

    let followBtnJsx = () => {
        if (props.followed !== undefined) {
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

        else {
            return <></>
        }
    }

    return followBtnJsx()
}

// TODO добавить sweet alert

export default compose(withFetching(), withFollowUser, withRouter, withAuthRender)(Follow)