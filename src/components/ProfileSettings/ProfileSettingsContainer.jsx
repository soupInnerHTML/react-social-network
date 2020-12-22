import React, { Component } from "react"
import ProfileSettings from "./ProfileSettings"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { getProfileTC, setProfileMetaTC } from "../../redux/profileReducer"
import { getAuthId, getProfileData } from "../../redux/usersSelectors"
import { withFetching } from "../../hoc/withFetching"

class ProfileSettingsContainer extends Component {
    async componentDidMount() {
        let { profileData, setFetching, authId, } = this.props
        if (profileData.userId !== authId) {
            await this.props.setProfileMetaTC()
            setFetching(true)
        } 
        else {
            setFetching(true)
        }
    }

    render() {
        let { isFetching, setFetching, profileData, setProfileMeta, } = this.props
        return (
            <ProfileSettings {...{ isFetching, setFetching, setProfileMeta, profileData, }}></ProfileSettings>
        )
    }
}

let mapStateToProps = state => ({
    profileData: getProfileData(state),
    authId: getAuthId(state),
})

let mapDispatchToProps = {
    getProfileTC,
    setProfileMetaTC,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect, withFetching(false))(ProfileSettingsContainer)