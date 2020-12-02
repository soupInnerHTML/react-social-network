import { Redirect } from "react-router-dom"
import React from 'react'

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to='/login'></Redirect>
            }

            return <Component {...this.props}></Component>
        }
    }

    return RedirectComponent
}