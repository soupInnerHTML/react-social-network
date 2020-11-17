/* Ultrashort name _ for root styles*/
import _ from './Friend.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Friend = props => {
    let changeFollowState = () => {
        props.followed ? props.unfollow(props.friendId) : props.follow(props.friendId)
    }

    return (
        <div className={_.friend}>
            <NavLink to={'/profile/' + props.friendId}>
                <div className={props.followed ? _.unfollow : _.follow} onClick={changeFollowState}></div>
                <img src={props.avatar} className={"avatar " + _.avatar} alt="" />
                <p className={_.name}>{props.name}</p>
            </NavLink>
        </div>
    );
}

export default Friend