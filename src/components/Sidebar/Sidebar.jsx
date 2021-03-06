import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import cs from "classnames"
import _ from "./Sidebar.module.css"
/* Ultrashort name _ for root styles*/

const Sidebar = (props) => {
    return (
        <aside className={ cs(_.sidebar, "App-block", "App-sidebar") }>
            <nav>
                <NavLink exact to="/profile" activeClassName={ _.active }>Profile</NavLink>
                <NavLink to="/feed" activeClassName={ _.active }>Feed</NavLink>
                <NavLink to="/dialogs" activeClassName={ _.active }>Messages</NavLink>
                <NavLink to="/friends" activeClassName={ _.active }>Friends</NavLink>
                <NavLink to="/music" activeClassName={ _.active }>Music</NavLink>
                <hr className={ "separator " + _.topLine } />
                <NavLink to="/settings" activeClassName={ _.active }>Settings</NavLink>
            </nav>
        </aside>
    )
}

let mapStateToProps = state => ({
    currentUser: state.auth.id,
})

export default connect(mapStateToProps)(Sidebar)