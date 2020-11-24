/* Ultrashort name _ for root styles*/
import _ from './Info.module.css'
import socket from '../../../img/socket.jpg'

const Info = (props) => {



  return (
    <section className={_.info}>
      <div className={"avatar " + _.avatar}>
        <img src={(props.profileData.photos || { large: '' }).large || socket} alt="" />
      </div>

      <div className={_.desc}>
        <p className={_.name}>{props.profileData.fullName}</p>
        {/* Ruby ⛓ Soho */}
        <p>{props.profileData.aboutMe}</p>
        {/* Date of Birth: 4 november '02 */}
        <p>{props.profileData.lookingForAJobDescription}</p>
        {/* Education: PTPIT '22 */}
        <a target="_blank" href="https://soupinnerHTML.github.io" rel="noreferrer">Web Site</a>
      </div>

    </section>
  )

}

export default Info