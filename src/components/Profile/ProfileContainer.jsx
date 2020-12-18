import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getProfileThunkCreator, getStatusThunkCreator, nullProfileData } from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { withFetching } from '../../hoc/withFetching'


class profileClass extends React.Component {

    refreshProfile = async () => {
        await this.props.getProfile(this.props.match.params.userId)
        await this.getStatus()
        this.props.setFetching(false)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevState, prevProps) {
        if (prevState.status !== this.props.status || prevState.isNotAuth !== this.props.isNotAuth) {
            this.getStatus()
        }
        if(prevState.match.url !== this.props.match.url && !this.props.isFetching) {
            this.props.setFetching(true)
            this.refreshProfile()
        }
    }

    getStatus() {
        if (this.props.isNotAuth === 0) {
            return this.props.getStatusThunkCreator(this.props.match.params.userId || this.props.id)
        }
        else {
            return {then: function(){}}
        }
    }

    infoProps = {
        profileData: this.props.profileData,
        idFromUri: this.props.match.params.userId
    }

    render() {
        return (
            <>
                <Profile {...this.props} infoProps={this.infoProps}></Profile>
                {(this.props.isProfileUndefined || +this.infoProps.idFromUri === +this.props.id) && <Redirect to='/profile' />}
            </>
        )
    }
}

let mapStateToProps = state => ({
    id: state.auth.id,
    profileData: state.profilePage.profileData,
    status: state.profilePage.status,
    isProfileUndefined: state.profilePage.isProfileUndefined
})

let mapDispatchToProps = {
    getProfile: getProfileThunkCreator,
    nullProfileData,
    getStatusThunkCreator
}

export default compose(withFetching(), connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(profileClass)