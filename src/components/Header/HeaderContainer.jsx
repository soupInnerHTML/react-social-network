import Header from "./Header";
import React from "react"
import { connect } from "react-redux";
import { authThunkCreator, logoutThunkCreator } from "../../redux/authReducer"
import { getAvatar, getIsNotAuth, getLogin } from "../../redux/usersSelectors";


class HeaderClass extends React.Component {
    componentDidMount() {
        this.props.authThunkCreator();
    }
    render() {
        return <Header { ...this.props }></Header>
    }
}

let mapStateToProps = (state) => ({
    isNotAuth: getIsNotAuth(state),
    name: getLogin(state),
    headerAvatar: getAvatar(state),
})

let mapDispatchToProps = {
    authThunkCreator,
    logoutThunkCreator,
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClass)

export default HeaderContainer