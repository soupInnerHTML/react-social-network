/* Ultrashort name _ for root styles*/
import _ from "./Info.module.css"
import socket from "../../../img/socket.jpg"
import React from "react"
import Follow from "./Follow/Follow"
import cs from "classnames"
import EditAvatar from "./EditAvatar/EditAvatarContainer"
import { Description } from "./Description"

const Info = (props) => {

    let { photos, } = props.profileData

    return (
        <section className={ _.info }>
            <div className={ cs("avatar", _.avatar) }>
                { photos && <img src={ photos.large || socket } alt="" /> }
                <EditAvatar></EditAvatar>
            </div>

            <Description { ...props } ></Description>


            <div className={ _.folllowTo }>
                <Follow></Follow>
            </div>

        </section>
    )

}

export default Info