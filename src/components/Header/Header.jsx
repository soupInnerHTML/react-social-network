/* Ultrashort name _ for root styles*/
import _ from './Header.module.css'
import logoSrc from '../../img/logo.svg'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (

        <header className={_.header + ' App-block'}>
            <div className={_.headerContainer + " App-container"}>
                <img src={logoSrc} alt="" />
                <div className={_.left}>
                    <NavLink to="/users" className={_.users}>Users</NavLink>
                    {props.isAuth ? <a href="/#" className={_.login}>{props.name}</a> : <a href="/#" className={_.login}>Login</a>}
                </div>
            </div>
        </header>
    )
}

export default Header