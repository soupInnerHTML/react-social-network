/* Ultrashort name _ for root styles*/
import _ from './Friend.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


const Friend = props => {

    let clickToChangeFollowState = () => {
        props.changeFollowState(props.followed, props.id)
    }

    let currentId = -1

    return (
        <div className={_.friend}>
            <button className={_.round + ' ' + (props.followed ? _.unfollow : _.follow)}
                onClick={clickToChangeFollowState} disabled={props.usersToChangeFollowState.includes(props.id)}></button>

            <NavLink to={'/profile/' + props.id}>
                <img src={props.photos.small || '/static/media/socket.bdcbc318.jpg'} className={"avatar " + _.avatar} alt="" />
                <p className={_.name}>{props.name}</p>
            </NavLink>
        </div>
    );
}
export default Friend