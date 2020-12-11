import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { loginThunkCreator } from '../../redux/authReducer'

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
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)