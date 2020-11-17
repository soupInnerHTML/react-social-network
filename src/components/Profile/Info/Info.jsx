/* Ultrashort name _ for root styles*/
import _ from './Info.module.css'

const Info = () => {
  return (
    <section className={_.info}>
      <div className={"avatar " + _.avatar}>

      </div>

      <div className={_.desc}>
        <p className={_.name}>Ruby ⛓ Soho</p>
        <p>Date of Birth: 4 november '02</p>
        <p>Education: PTPIT '22</p>
        <a target="_blank" href="https://soupinnerHTML.github.io" rel="noreferrer">Web Site</a>
      </div>

    </section>
  )
}

export default Info