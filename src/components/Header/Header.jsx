/* Ultrashort name _ for root styles*/
import _ from './Header.module.css'
import logoSrc from '../../img/logo.svg'

const Header = (props) => {
    return (

        <header className={_.header + ' App-block'}>
            <div className={_.headerContainer + " App-container"}>
                <img src={logoSrc} alt="" />
                {props.isAuth ? <a href="#" className={_.login}>{props.name}</a> : <a href="#" className={_.login}>Login</a>}
            </div>
        </header>
    )
}

export default Header