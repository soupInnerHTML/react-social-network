import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfileThunkCreator, fetched, nullProfileData } from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom'



class profileClass extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId || this.props.currentUser)
    }

    componentWillUnmount() {
        // this.props.fetched()
        // this.props.nullProfileData()
    }

    render() {
        return (
            <>
                {/* <Preloader isFetching={this.props.isFetching}></Preloader> */}
                <Profile profileData={this.props.profileData} isFetching={this.props.isFetching}></Profile>
            </>
        )
    }
}

let mapStateToProps = state => ({
    profileData: state.profilePage.profileData,
    isFetching: state.profilePage.isFetching,
    currentUser: state.auth.id
})

let mapDispatchToProps = {
    getProfile: getProfileThunkCreator,
    fetched,
    nullProfileData
}


const profileClassWithRouter = withRouter(profileClass)
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(profileClassWithRouter)

export default ProfileContainer