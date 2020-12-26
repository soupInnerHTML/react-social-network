import React from "react"
import Profile from "./Profile"
import { connect } from "react-redux"
import { getProfileThunkCreator, getStatusThunkCreator, nullProfileData, onProfileUndefined } from "../../redux/profileReducer"
import { Redirect, withRouter } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"
import { withFetching } from "../../hoc/withFetching"
import { getAuthId, getIsProfileUndefined, getProfileData, getStatus } from "../../redux/usersSelectors"


class profileClass extends React.Component {

    refreshProfile = async () => {
        this.props.onProfileUndefined(false)
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
        if ((prevState.match.url !== this.props.match.url && !this.props.isFetching) || (this.props.isProfileUndefined && prevState.isProfileUndefined === this.props.isProfileUndefined)) {
            console.log([prevState.match.url, this.props.match.url])
            this.props.setFetching(true)
            this.refreshProfile()
        }
    }

    getStatus() {
        // if (this.props.isNotAuth === 0) {
        return this.props.getStatusThunkCreator(this.props.match.params.userId || this.props.id)
        // }
        // else {
        //     return new Promise(reject => reject())
        // }
    }

    infoProps = {
        profileData: this.props.profileData,
        idFromUri: this.props.match.params.userId,
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
    id: getAuthId(state),
    profileData: getProfileData(state),
    status: getStatus(state),
    isProfileUndefined: getIsProfileUndefined(state),
})

let mapDispatchToProps = {
    getProfile: getProfileThunkCreator,
    nullProfileData,
    getStatusThunkCreator,
    onProfileUndefined,
}

export default compose(withFetching(), connect(mapStateToProps, mapDispatchToProps), withRouter, withAuthRedirect)(profileClass)