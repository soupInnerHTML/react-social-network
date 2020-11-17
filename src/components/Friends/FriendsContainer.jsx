import Friends from "./Friends";
import { connect } from 'react-redux'
import * as friendsReducer from "../../redux/friendsReducer";

let mapStateToProps = state => {
    return {
        friendsData: state.friendsPage.friendsData,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage
    }
}

let mapDispatchToProps = dispatch => {
    return {
        follow: id => {
            dispatch(friendsReducer.followAC(id))
        },
        unfollow: id => {
            dispatch(friendsReducer.unfollowAC(id))
        },
        setUsers: users => {
            dispatch(friendsReducer.setUsersAC(users))
        },
        upCurrentPage: () => {
            dispatch(friendsReducer.upCurrentPageAC())
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer