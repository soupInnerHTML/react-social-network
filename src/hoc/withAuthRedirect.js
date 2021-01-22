import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { getAuthId, getIsNotAuth } from "../redux/usersSelectors"

export const withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {

        if (props.isNotAuth) {
            return <Redirect to='/login'></Redirect>
        }

        else {
            return <Component { ...props }></Component>
        }
    }

    let mapStateToProps = state => ({
        isNotAuth: getIsNotAuth(state),
    })

    return connect(mapStateToProps)(RedirectComponent)

}