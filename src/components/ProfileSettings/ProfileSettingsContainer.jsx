import React, { Component } from "react"
import ProfileSettings from "./ProfileSettings"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { getProfileTC, setProfileMetaTC } from "../../redux/profileReducer"
import { setMyProfile } from "../../redux/authReducer"
import { getMyProfileData } from "../../redux/usersSelectors"
import { withFetching } from "../../hoc/withFetching"

class ProfileSettingsContainer extends Component {
    componentDidMount() {
        let { profileData, setFetching, setProfileMetaTC, } = this.props
        if (!profileData.userId) {
            setProfileMetaTC(profileData)
        }
        setFetching(true)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profileData !== this.props.profileData) {
            // console.log([prevProps.profileData, this.props.profileData])
            setProfileMetaTC(this.props.profileData)
        }
    }

    render() {
        let { isFetching, setFetching, profileData, setProfileMetaTC, setMyProfile, } = this.props
        return (
            <ProfileSettings {...{ isFetching, setFetching, setProfileMetaTC, profileData, setMyProfile, }}></ProfileSettings>
        )
    }
}

let mapStateToProps = state => ({
    profileData: getMyProfileData(state),
})

let mapDispatchToProps = {
    getProfileTC,
    setProfileMetaTC,
    setMyProfile,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect, withFetching(false))(ProfileSettingsContainer)