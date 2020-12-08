/* Ultrashort name _ for root styles*/
import _ from './Header.module.css'
import logoSrc from '../../img/logo.svg'
import { NavLink } from 'react-router-dom'
import React from 'react'
import socket from '../../img/socket.jpg'

const Header = (props) => {
    let getAvatarAndName = () => {
        return (
            <div className={_.avaAndName}>
                <a href="/#" className={_.login}>{props.name}</a>
                <img className={"avatar " + _.avatar} src={props.headerAvatar || socket} alt="" />
            </div>
        )
    }
    return (

        <header className={_.header + ' App-block'}>
            <div className={_.headerContainer + " App-container"}>
                <img src={logoSrc} alt="" />
                <div className={_.left}>
                    <NavLink to="/users" className={_.users}>Our Community</NavLink>
                    {props.isNotAuth ? <a href="/login" className={_.login}>Login</a> : getAvatarAndName()}
                </div>
            </div>
        </header >
    )
}

export default Header