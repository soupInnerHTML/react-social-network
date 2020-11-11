import Friend from "./Friend/Friend";
import Friends from "./Friends";
import { connect } from 'react-redux'


// const FriendsContainer = props => {
//     let friendsData = props.store.getState().friendsPage.friendsData

//     let friendsObject = friendsData.map(friendData => <Friend name={friendData.name}
//          avatar={friendData.avatar}></Friend>)

//     return (
//        <Friends friendsObject={friendsObject}></Friends>
//     );
// }

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