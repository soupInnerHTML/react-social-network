import { connect } from 'react-redux'
import { follow, unfollow, setUsers, upCurrentPage, fetched, fetching } from "../../redux/friendsReducer";
import Friends from "./Friends";
import Axios from 'axios';
import React from 'react';

class FriendsClass extends React.Component {
    componentDidMount = () => {
        this.props.fetching()
        if (!this.props.friendsData.length) {
            console.log('response sent')
            window.addEventListener('scroll', this.onScroll)
            this.getUsers()
        }
        else {
            this.props.fetched()
        }
    }

    onScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.body.clientHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (windowHeight + scrollTop >= documentHeight) {
            this.props.upCurrentPage()
            this.getUsers()
        }
    }

    getUsers = () => {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(Response => {
            this.props.fetched()
            this.props.setUsers(Response.data.items)
            // console.log('response sent')
        })
    }

    render() {
        return <Friends friendsData={this.props.friendsData} follow={this.props.follow} unfollow={this.props.unfollow} isFetching={this.props.isFetching}></Friends>
    }
}

let mapStateToProps = state => {
    return {
        friendsData: state.friendsPage.friendsData,
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
    }
}

let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    upCurrentPage,
    fetched,
    fetching,
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsClass)

















// let mapDispatchToProps = dispatch => {
//     return {
//         follow: id => {
//             dispatch(friendsReducer.followAC(id))
//         },
//         unfollow: id => {
//             dispatch(friendsReducer.unfollowAC(id))
//         },
//         setUsers: users => {
//             dispatch(friendsReducer.setUsersAC(users))
//         },
//         upCurrentPage: () => {
//             dispatch(friendsReducer.upCurrentPageAC())
//         },
//         fetched: () => {
//             dispatch(friendsReducer.fetchedAC())
//         },
//         fetching: () => {
//             dispatch(friendsReducer.fetchingAC())
//         }
//     }
// }
