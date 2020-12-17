/* Ultrashort name _ for root styles*/
import _ from "./Dialog.module.css"
import React from "react";
import { NavLink } from "react-router-dom";

const Dialog = props => {
    let { id, avatar, name, } = props.dialogState
    let path = "/dialogs/" + id

    return (
        <NavLink to={path} activeClassName={_.active} className={_.dialogUser}>
            <img src={avatar} alt="" className='avatar' />
            {name}
        </NavLink>
    );
}

export default Dialog