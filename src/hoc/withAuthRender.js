import React from "react"
import { connect } from "react-redux"
import { getIsNotAuth } from "../redux/usersSelectors"

export const withAuthRender = (Component) => {
    class withAuthRenderClass extends React.Component {
        render() {
            return (
                this.props.isNotAuth === 0 && <Component {...this.props}></Component>
            )
        }
    }

    const mapStateToProps = state => ({
        isNotAuth: getIsNotAuth(state),
    })

    return connect(mapStateToProps)(withAuthRenderClass)
}