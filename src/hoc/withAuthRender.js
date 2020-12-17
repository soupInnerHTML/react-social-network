import React from "react"
import { connect } from "react-redux"

export const withAuthRender = (Component) => {
    class withAuthRenderClass extends React.Component {
        render() {
            return (
                this.props.isNotAuth === 0 && <Component {...this.props}></Component>
            )
        }
    }

    const mapStateToProps = state => ({
        isNotAuth: state.auth.isNotAuth,
    })

    return connect(mapStateToProps)(withAuthRenderClass)
}