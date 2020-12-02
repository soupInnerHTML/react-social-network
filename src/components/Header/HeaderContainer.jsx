import Header from './Header';
import React from 'react'
import { connect } from 'react-redux';
import { authThunkCreator } from '../../redux/authReducer'


class HeaderClass extends React.Component {
    componentDidMount() {
        this.props.authThunkCreator();
    }
    render() {
        return <Header {...this.props}></Header>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    name: state.auth.login
})

let mapDispatchToProps = {
    authThunkCreator
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClass)

export default HeaderContainer