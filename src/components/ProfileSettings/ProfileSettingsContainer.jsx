import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import ProfileSettings from "./ProfileSettings"
import { getProfileTC } from "../../redux/profileReducer"
import { getProfileData } from "../../redux/usersSelectors"

class ProfileSettingsContainer extends Component {
    async componentDidMount() {
        await this.props.getProfileTC()
    }

    render() {
        return (
            <ProfileSettings profileData={this.props.profileData}></ProfileSettings>
        )
    }
}

let mapStateToProps = state => ({
    profileData: getProfileData(state),
})

let mapDispatchToProps = {
    getProfileTC,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(ProfileSettingsContainer)