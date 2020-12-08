/* Ultrashort name _ for root styles*/
import _ from './Info.module.css'
import socket from '../../../img/socket.jpg'
import React from 'react'
import StatusContainer from './Status/StatusContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faInstagram, faTwitter, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
// import { follow } from '../../../redux/usersReducer'
import Follow from './Follow'

const Info = (props) => {

  let { photos, fullName, contacts, lookingForAJobDescription, aboutMe } = props.profileData

  let processSocials = (social, iconName) => {
    if (social) {
      return (
        <a href={'https://' + social.replace(/http(s|):\/\//i, '')} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={iconName} />
        </a>
      )
    }
  }

  return (
    <section className={_.info}>
      <div className={"avatar " + _.avatar}>
        {photos && <img src={photos.large || socket} alt="" />}
      </div>

      <div className={_.desc}>
        <p className={_.name}>{fullName}</p>
        {/* Ruby ⛓ Soho */}
        <div className={_.aboutMe}>
          {aboutMe && <p>🧐 {aboutMe}</p>}
          {/* Date of Birth: 4 november '02 */}
          {lookingForAJobDescription && <p>📌 {lookingForAJobDescription}</p>}

          {props.status && <StatusContainer idFromUri={props.match.params.userId}></StatusContainer>}
          {/* Education: PTPIT '22 */}


          {contacts && processSocials(contacts.facebook, faFacebook)}
          {contacts && processSocials(contacts.github, faGithub)}
          {contacts && processSocials(contacts.instagram, faInstagram)}
          {contacts && processSocials(contacts.twitter, faTwitter)}
          {contacts && processSocials(contacts.vk, faVk)}
          {contacts && processSocials(contacts.youtube, faYoutube)}
          {contacts && processSocials(contacts.mainLink, faLink)}
          {contacts && processSocials(contacts.website, faLink)}
        </div>

      </div>

      <div className={_.folllowTo}>
        {/* <button className={_.folllowBtn}>Подписаться</button> */}
        <Follow></Follow>
      </div>

    </section>
  )

}

export default Info