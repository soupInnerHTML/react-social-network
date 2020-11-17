import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'


class profileClass extends React.Component {

    getUsers() {

    }
    render() {
        <Profile {...this.props}></Profile>
    }
}

mapStateToProps = state => ({

})

mapDispatchToProps = {

}

export default ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(profileClass)