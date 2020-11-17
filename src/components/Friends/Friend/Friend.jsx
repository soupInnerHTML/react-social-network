/* Ultrashort name _ for root styles*/
import _ from './Friend.module.css'
import React from 'react'


const Friend = props => {
    let changeFollowState = () => {
        props.followed ? props.unfollow(props.friendId) : props.follow(props.friendId)
    }

    return (
        <div className={_.friend}>
            <div className={props.followed ? _.unfollow : _.follow} onClick={changeFollowState}></div>
            <img src={props.avatar} className={"avatar " + _.avatar} alt="" />
            <p className={_.name}>{props.name}</p>
        </div>
    );
}

export default Friend