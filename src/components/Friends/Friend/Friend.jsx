/* Ultrashort name _ for root styles*/
import _ from './Friend.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Friend = props => {
    let changeFollowState = () => {
        props.followed ? props.unfollow(props.id) : props.follow(props.id)
    }

    return (
        <div className={_.friend}>
            <div className={props.followed ? _.unfollow : _.follow} onClick={changeFollowState}></div>
            <NavLink to={'/profile/' + props.id}>
                <img src={props.photos.small} className={"avatar " + _.avatar} alt="" />
                <p className={_.name}>{props.name}</p>
            </NavLink>
        </div>
    );
}
export default Friend