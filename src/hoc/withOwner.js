import React from "react"
import { withRouter } from "react-router-dom"

export const withOwner = (isInverse = false) => (Component) => {
    let withOwnerPure = ({ history, location, ...props }) => {
        let components = [<></>, <Component {...props}></Component>]

        if (isInverse) {
            return props.match.params.userId ? components[0] : components[1]
        }
        else {
            return props.match.params.userId ? components[1] : components[0]
        }
    }

    return withRouter(withOwnerPure)
}
