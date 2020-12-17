import React from "react"
import Login from "./Login"
import { connect } from "react-redux"
import { loginThunkCreator } from "../../redux/authReducer"
import { init } from "../../redux/appReducer"

class LoginContainer extends React.Component {
    render() {
        return (
            <Login {...this.props}></Login>
        )
    }
}

let mapStateToProps = state => ({
    isNotAuth: state.auth.isNotAuth,
})

let mapDispatchToProps = {
    loginThunkCreator,
    init,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)