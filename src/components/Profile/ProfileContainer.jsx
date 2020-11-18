import Axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setUserProfile, fetching, fetched } from '../../redux/profileReducer'
import Preloader from '../common/Preloader'
import { withRouter } from 'react-router-dom'



class profileClass extends React.Component {
    componentDidMount() {
        this.props.fetching()
        let getProfileIdFromUriParams = this.props.match.params.userId || 12635
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${getProfileIdFromUriParams}`).then(Response => {
            this.props.fetched()
            this.props.setUserProfile(Response.data)
        })
    }

    render() {
        return (
            <>
                <Preloader isFetching={this.props.isFetching}></Preloader>
                <Profile profileData={this.props.profileData}></Profile>
            </>
        )
    }
}

let mapStateToProps = state => ({
    profileData: state.profilePage.profileData,
    isFetching: state.profilePage.isFetching
})

let mapDispatchToProps = {
    setUserProfile,
    fetching,
    fetched
}


const profileClassWithRouter = withRouter(profileClass)
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(profileClassWithRouter)

export default ProfileContainer