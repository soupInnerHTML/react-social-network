import Friend from "./Friend/Friend";
import Friends from "./Friends";
import { connect } from 'react-redux'

let mapStateToProps = state => {
    return {
        friendsObject: state.friendsPage.friendsData.map(friendData => <Friend name={friendData.name}
            avatar={friendData.avatar}></Friend>)
    }
}

let mapDispatchToProps = dispatch => {
    return {

    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer