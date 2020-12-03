import { Redirect } from "react-router-dom"
import React from 'react'
import { connect } from "react-redux"

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isNotAuth) {
                return <Redirect to='/login'></Redirect>
            }

            else {
                return <Component {...this.props}></Component>
            }
        }
    }

    let mapStateToProps = state => ({
        isNotAuth: state.auth.isNotAuth
    })

    return connect(mapStateToProps)(RedirectComponent)

}