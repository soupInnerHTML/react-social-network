import Friend from "./Friend/Friend";
import Friends from "./Friends";
import { connect } from 'react-redux'
import { followAC, unfollowAC } from "../../redux/friendsReducer";

let mapStateToProps = state => {
    return {
        friendsObject: state.friendsPage.friendsData.map(friendData => <Friend name={friendData.name}
            avatar={friendData.avatar} isFollowed={friendData.isFollowed}></Friend>),
    }
}

let mapDispatchToProps = dispatch => {
    return {
        follow: id => {
            dispatch(followAC(id))
        },
        unfollow: id => {
            dispatch(unfollowAC(id))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer