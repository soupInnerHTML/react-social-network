/* Ultrashort name _ for root styles*/
import _ from "./Header.module.css"
import logoSrc from "../../img/logo.svg"
import { NavLink } from "react-router-dom"
import React from "react"
import AvatarArea from "./AvatarArea/AvatarArea"
import cs from "classnames"

const Header = (props) => {
    return (

        <header className={_.header}>
            <div className={cs(_.headerContainer, "App-container")}>
                <img src={logoSrc} alt="" />
                <div className={_.left}>
                    <NavLink to="/users" className={_.users}>Our Community</NavLink>
                    {props.isNotAuth ? <NavLink to="/login" className={_.login}>Login</NavLink> : <AvatarArea {...props}></AvatarArea>}
                </div>
            </div>
        </header >
    )
}

export default Header