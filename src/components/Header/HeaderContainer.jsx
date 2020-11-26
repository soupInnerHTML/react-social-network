import Header from './Header';
import React from 'react'
import { connect } from 'react-redux';
import { setUserData } from '../../redux/authReducer'
import { usersAPI } from '../../api/api';


class HeaderClass extends React.Component {
    componentDidMount() {
        // usersAPI.myVk().then(Response => console.log(Response))
        // usersAPI.getVkFriends().then(Response => console.log(Response))

        usersAPI.getWhoAmI().then(data => {
            this.props
                .setUserData(data.data.login, data.data.email, data.data.id,
                    usersAPI.getAvatarByName(data.data.login).then(Response => Response), !data.resultCode)
        })
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
    setUserData
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderClass)

export default HeaderContainer