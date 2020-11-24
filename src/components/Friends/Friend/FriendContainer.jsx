import Friend from "./Friend";
import React from 'react'
import { connect } from "react-redux";
import { follow, unfollow, followUnfollowRequestInProgress } from "../../../redux/friendsReducer";
import { usersAPI } from "../../../api/api";


class FriendClass extends React.Component {
    changeFollowState = (followed, id) => {
        if (followed) {
            let areYouSure = window.confirm('Вы уверены, что хотите удалить этого пользователя из друзей?')
            if (areYouSure) {
                this.props.followUnfollowRequestInProgress(true, id)

                usersAPI.unfollow(id)
                    .then(data => {
                        if (data.resultCode) {
                            alert(data.messages)
                        }
                        else {
                            this.props.unfollow(id)
                        }

                        this.props.followUnfollowRequestInProgress(false, id)
                    })
                    .catch(e => {
                        this.props.followUnfollowRequestInProgress(false, id)
                        alert(e)
                    })
            }

        }
        else {
            this.props.followUnfollowRequestInProgress(true, id)

            usersAPI.follow(id)
                .then(data => {
                    if (data.resultCode) {
                        alert(data.messages)
                    }
                    else {
                        this.props.follow(id)
                    }

                    this.props.followUnfollowRequestInProgress(false, id)
                })
                .catch(e => {
                    this.props.followUnfollowRequestInProgress(false, id)
                    alert(e)
                })
        }
    }

    render() {
        return this.props.friendsData.map(friendData => (
            <Friend {...this.props} {...friendData} key={friendData.id} changeFollowState={this.changeFollowState}></Friend>
        ))
    }
}
let mapStateToProps = (state) => ({
    friendsData: state.friendsPage.friendsData,
    usersToChangeFollowState: state.friendsPage.usersToChangeFollowState
})

let mapDispatchToProps = {
    follow,
    unfollow,
    followUnfollowRequestInProgress,
}

const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(FriendClass)
export default FriendContainer