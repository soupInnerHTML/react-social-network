/* Ultrashort name _ for root styles*/
import _ from './Info.module.css'
import socket from '../../../img/socket.jpg'
import React from 'react'
import StatusContainer from './Status/StatusContainer'

const Info = (props) => {



  return (
    <section className={_.info}>
      <div className={"avatar " + _.avatar}>
        <img src={(props.profileData.photos || { large: '' }).large || socket} alt="" />
      </div>

      <div className={_.desc}>
        <p className={_.name}>{props.profileData.fullName}</p>
        {/* Ruby ⛓ Soho */}
        <p>{props.profileData.aboutMe && '🧐 ' + props.profileData.aboutMe}</p>
        {/* Date of Birth: 4 november '02 */}
        <p>{props.profileData.lookingForAJobDescription && '📌 ' + props.profileData.lookingForAJobDescription}</p>

        <StatusContainer idFromUri={props.match.params.userId}></StatusContainer>
        {/* Education: PTPIT '22 */}
        <a target="_blank" href="https://soupinnerHTML.github.io" rel="noreferrer">Web Site</a>
      </div>

    </section>
  )

}

export default Info