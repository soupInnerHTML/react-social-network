import Friends from "./Friends";
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, upCurrentPageAC } from "../../redux/friendsReducer";

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
            dispatch(followAC(id))
        },
        unfollow: id => {
            dispatch(unfollowAC(id))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        },
        upCurrentPage: () => {
            dispatch(upCurrentPageAC())
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer