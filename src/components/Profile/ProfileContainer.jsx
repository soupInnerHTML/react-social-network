import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfileThunkCreator, fetched, nullProfileData } from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


class profileClass extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }

    componentWillUnmount() {
        // this.props.fetched()
        // this.props.nullProfileData()
    }

    render() {
        return (
            <>
                <Profile {...this.props} ></Profile>
                {this.props.isProfileUndefined && <Redirect to='/profile' />}
            </>
        )
    }
}

let mapStateToProps = state => ({
    profileData: state.profilePage.profileData,
    isFetching: state.profilePage.isFetching,
    currentUser: state.auth.id,
    isProfileUndefined: state.profilePage.isProfileUndefined
    // isAuth: state.auth.isAuth
})

let mapDispatchToProps = {
    getProfile: getProfileThunkCreator,
    fetched,
    nullProfileData,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(profileClass)