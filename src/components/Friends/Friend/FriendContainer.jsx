import Friend from "./Friend";
import React from 'react'
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../../redux/usersReducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";


class FriendClass extends React.Component {

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
            <Friend {...this.props} {...friendData} key={friendData.id} changeFollowState={this.changeFollowState}></Friend>
        ))
    }
}
let mapStateToProps = (state) => ({
    friendsData: state.users.usersData,
    usersToChangeFollowState: state.users.usersToChangeFollowState
})

let mapDispatchToProps = {
    followUser, unfollowUser
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(FriendClass)