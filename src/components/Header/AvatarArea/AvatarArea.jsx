import React, { useState } from 'react'
import _ from './AvatarArea.module.css'
import socket from '../../../img/socket.jpg'
import { NavLink } from 'react-router-dom'

let AvatarArea = props => {

    const [display, setDisplay] = useState(false)

    let disableDisplay = (e) => {
        setTimeout(() => setDisplay(false), 200)
        console.log(e)
    }

    let toggleDropdown = () => display ? disableDisplay() : setDisplay(true)
    
    return (
        <div className={_.avaAndName}>
            <a href="#" onClick={toggleDropdown} onBlur={disableDisplay} className={_.login}>
                <p>{props.name || 'Алеша'}</p>
                <img className={'avatar ' + _.avatar} src={props.headerAvatar || socket} alt="" />
            </a>
            <div className={_.dropdown + (display ? ' ' + _.toggled : '') } style={display ? {animation : '.2s fade',} : {animation : '.2s fadeOut',}}>
                {/* + (display ? ' ' + _.toggled : '') */}
                <NavLink className={_.dropdownItem} to="/setting">Настройки</NavLink>
                <hr className="separator"/>
                <a className={_.dropdownItem} href="#" onClick={props.logoutThunkCreator}>Выйти</a>
            </div>
        </div>
    )
}

export default AvatarArea