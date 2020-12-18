import React from "react"
import { faGithub, faFacebook, faInstagram, faTwitter, faVk, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Socials = ({ contacts, }) => {
    let socialIcons = {
        "facebook": faFacebook, 
        "github": faGithub, 
        "instagram": faInstagram, 
        "twitter": faTwitter, 
        "vk": faVk, 
        "youtube": faYoutube, 
        "website": faLink, 
        "mainLink": faLink,
    }

    let ProcessSocials = ({ social, iconName, }) => {
        if (social) {
            return (
                <a href={"http://" + social.replace(/http(s|):\/\//i, "")} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={iconName} />
                </a>
            )
        }
    }

    return (
        Object.keys(contacts || {}).map(social => {
            if (contacts[social]) {
                return <ProcessSocials key={social} social={contacts[social]} iconName={socialIcons[social]}/>
            }
        })
    )
}
