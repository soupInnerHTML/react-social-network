import User from "./User";
import React from 'react'
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../../redux/usersReducer";


class UserClass extends React.Component {

    changeFollowState = (followed, id) => {
        if (followed) {
            window.confirm('Вы уверены, что хотите удалить этого пользователя из друзей?') && this.props.unfollowUser(id)
        }
        else {
            this.props.followUser(id)
        }
    }

    render() {
        return this.props.friendsData.map(friendData => (
            <User {...this.props} {...friendData} key={friendData.id} changeFollowState={this.changeFollowState}></User>
        ))
    }
}


let mapStateToProps = (state) => ({
    friendsData: state.friendsPage.friendsData,
    usersToChangeFollowState: state.friendsPage.usersToChangeFollowState,
    isNotAuth: state.auth.isNotAuth
})

let mapDispatchToProps = {
    followUser, unfollowUser
}

const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)
export default FriendContainer