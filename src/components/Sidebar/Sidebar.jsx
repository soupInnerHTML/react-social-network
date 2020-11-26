import { NavLink } from 'react-router-dom'
import _ from './Sidebar.module.css'
/* Ultrashort name _ for root styles*/

const Sidebar = () => {
    return (
        <aside className={_.sidebar + ' App-block App-sidebar'}>
            <nav>
                <NavLink to="/profile" activeClassName={_.active}>Profile</NavLink>
                <NavLink to="/feed" activeClassName={_.active}>Feed</NavLink>
                <NavLink to="/dialogs" activeClassName={_.active}>Messages</NavLink>
                <NavLink to="/friends" activeClassName={_.active}>Friends</NavLink>
                <NavLink to="/music" activeClassName={_.active}>Music</NavLink>
                <hr className={"separator " + _.topLine} />
                <NavLink to="/settings" activeClassName={_.active}>Settings</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar