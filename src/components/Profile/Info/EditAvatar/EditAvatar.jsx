import React from "react"
import _ from "./EditAvatar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"
import cs from "classnames"

export const EditAvatar = (props) => {
    let [display, setDisplay] = React.useState(false)

    let selectAvatar = e => {
        let file = e.target.files
        if (file.length) {
            props.saveAvatarTC(file[0])
        }
    }
    let fadeIn = () => {
        setDisplay(true)
    }

    let fadeOut = () => {
        setDisplay(false)
    }

    return (
        <>
            <input onChange={ selectAvatar } onMouseEnter={ fadeIn } onMouseLeave={ fadeOut } type="file" className={ _.edit }/>
            <FontAwesomeIcon className={ cs(_.body, { active: display, }) } icon={ faPencilAlt }></FontAwesomeIcon>
        </>
    )
}
