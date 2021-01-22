import React from "react"
import Login from "./Login"
import { connect } from "react-redux"
import { loginThunkCreator } from "../../redux/authReducer"
import { init } from "../../redux/appReducer"
import { getCaptcha, getIsNotAuth } from "../../redux/usersSelectors"

class LoginContainer extends React.Component {
    render() {
        return (
            <Login { ...this.props }></Login>
        )
    }
}

let mapStateToProps = state => ({
    isNotAuth: getIsNotAuth(state),
    captcha: getCaptcha(state),
})

let mapDispatchToProps = {
    loginThunkCreator,
    init,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)