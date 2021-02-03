import React from "react"
import sendImg from "../../../img/send.svg"
import _ from "./Send.module.css";
import cs from "classnames"

type PropsType = {
    input: {
        values: string
    },
    className?: string,
    socketState?: boolean
}

export const Send: React.FC<PropsType> = ({ input, className, socketState, }) => {
    return (
        <button disabled={ socketState } className={ cs(className, _.send, { [_.null]: input && !input.values && !socketState, } ) } type="submit">
            <img src={ sendImg } alt="" />
        </button>
    )
}
