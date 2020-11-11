import Friend from "./Friend/Friend";
import Friends from "./Friends";

const FriendsContainer = props => {
    let friendsData = props.store.getState().friendsPage.friendsData
    let friendsObject = friendsData.map(friendData => <Friend name={friendData.name}
         avatar={friendData.avatar}></Friend>)

    return (
       <Friends friendsObject={friendsObject}></Friends>
    );
}

export default FriendsContainer