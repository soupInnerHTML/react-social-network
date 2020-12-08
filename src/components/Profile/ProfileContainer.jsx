import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfileThunkCreator, getStatusThunkCreator, fetched, nullProfileData } from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


class profileClass extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
        this.getStatus()
    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.status !== this.props.status || prevState.isNotAuth !== this.props.isNotAuth) {
            this.getStatus()
        }
    }

    getStatus() {
        if (this.props.isNotAuth === 0) {
            this.props.getStatusThunkCreator(this.props.match.params.userId || this.props.id)
        }
    }

    infoProps = {
        profileData: this.props.profileData,
        // match: this.props.match
    }

    render() {
        return (
            <>
                <Profile {...this.props} infoProps={this.infoProps}></Profile>
                {this.props.isProfileUndefined && <Redirect to='/profile' />}
            </>
        )
    }
}

let mapStateToProps = state => ({
    id: state.auth.id,
    profileData: state.profilePage.profileData,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    isProfileUndefined: state.profilePage.isProfileUndefined
})

let mapDispatchToProps = {
    getProfile: getProfileThunkCreator,
    fetched,
    nullProfileData,
    getStatusThunkCreator
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(profileClass)