/* Ultrashort name _ for root styles*/
import _ from './User.module.css'
import React from 'react'
import { NavLink } from 'react-router-dom'


const User = props => {

    let clickToChangeFollowState = () => (
        props.changeFollowState(props.followed, props.id)
    )


    return (
        <div className={_.friend}>
            {props.isNotAuth === 0 &&
                <button className={_.round + ' ' + (props.followed ? _.unfollow : _.follow)}
                    onClick={clickToChangeFollowState} disabled={props.usersToChangeFollowState.includes(props.id)}></button>}

            <NavLink to={'/profile/' + props.id}>
                <img src={props.photos.small || '/static/media/socket.bdcbc318.jpg'} className={"avatar " + _.avatar} alt="" />
                <p className={_.name}>{props.name}</p>
                {/* <img src={props.photo_100 || '/static/media/socket.bdcbc318.jpg'} className={"avatar " + _.avatar} alt="" />
                <p className={_.name}>{props.first_name + ' ' + props.last_name}</p> */}
            </NavLink>
        </div>
    );
}
export default User