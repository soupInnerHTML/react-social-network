import { Redirect } from "react-router-dom"
import React from 'react'
import { connect } from "react-redux"

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        initialMatch = {
            params: {
                userId: undefined
            }
        }
        render() {
            if (this.props.isNotAuth && !(this.props.match || this.initialMatch).params.userId) {
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