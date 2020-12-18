import React from "react"
import { Socials } from "./Socials"
import _ from "./Info.module.css"
import StatusContainer from "./Status/StatusContainer"

export const Description = ({ profileData, ...props }) => {
    let { lookingForAJobDescription, aboutMe, contacts, fullName, } = profileData
    return (
        <div className={_.desc}>
            <p className={_.name}>{fullName}</p>
            <div className={_.aboutMe}>
                {aboutMe && <p>🧐 {aboutMe}</p>}
                {lookingForAJobDescription && <p>📌 {lookingForAJobDescription}</p>}
                {props.status && <StatusContainer></StatusContainer>}
                <Socials {...{ contacts, } }></Socials>
            </div>
        </div>
    )
}
