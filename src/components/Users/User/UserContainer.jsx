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
        return this.props.usersData.map(userData => (
            <User {...this.props} {...userData} key={userData.id} changeFollowState={this.changeFollowState}></User>
        ))
    }
}


let mapStateToProps = (state) => ({
    usersData: state.users.usersData,
    usersToChangeFollowState: state.users.usersToChangeFollowState,
    isNotAuth: state.auth.isNotAuth
})

let mapDispatchToProps = {
    followUser, unfollowUser
}

const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)
export default FriendContainer