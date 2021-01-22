import React from "react"
import sendImg from "../../../img/send.svg"
import _ from "./Send.module.css";
import cs from "classnames"

export const Send = ({ input, className, }) => {
    return (
        <button className={ cs(className, _.send, { [_.null]: input && !input.values, } ) } type="submit">
            <img src={ sendImg } alt="" />
        </button>
    )
}
