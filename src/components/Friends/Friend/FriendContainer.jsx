import Friend from "./Friend";
import React from "react"
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../../redux/usersReducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { withFollowUser } from "../../../hoc/withFollowUser";


class FriendClass extends React.Component {
    render() {
        return [...this.props.friendsData]
            .sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0))
            .map(friendData => (
                <Friend {...this.props} {...friendData} key={friendData.id}></Friend>
            ))
    }
}
let mapStateToProps = (state) => ({
    friendsData: state.users.usersData,
    usersToChangeFollowState: state.users.usersToChangeFollowState,
})

let mapDispatchToProps = {
    followUser, unfollowUser,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect, withFollowUser)(FriendClass)