import React, { useState } from "react"
import _ from "./AvatarArea.module.css"
import socket from "../../../img/socket.jpg"
import { NavLink } from "react-router-dom"
import cs from "classnames"

let AvatarArea = props => {

    const [display, setDisplay] = useState(false)

    let disableDisplay = (e) => {
        setTimeout(() => setDisplay(false), 200)
        console.log(e)
    }

    let toggleDropdown = () => display ? disableDisplay() : setDisplay(true)
    
    let toggled = 1
    return (
        <div className={ _.avaAndName }>
            <a href="#" onClick={ toggleDropdown } onBlur={ disableDisplay } className={ _.login }>
                <p>{ props.name || "Алеша" }</p>
                <img className={ cs("avatar", _.avatar) } src={ props.headerAvatar || socket } alt="" />
            </a>
            <div className={ cs(_.dropdown, { [_.toggled]: display, } ) } style={ display ? { animation: ".2s fade", } : { animation: ".2s fadeOut", } }>
                <NavLink className={ _.dropdownItem } to="/settings">Настройки</NavLink>
                <hr className="separator"/>
                <a className={ _.dropdownItem } href="#" onClick={ props.logoutThunkCreator }>Выйти</a>
            </div>
        </div>
    )
}

export default AvatarArea