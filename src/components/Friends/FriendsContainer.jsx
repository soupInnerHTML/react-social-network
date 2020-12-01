import { connect } from 'react-redux'
import { nullFriends, getUsersThunkCreator } from "../../redux/usersReducer";
import Friends from "./Friends";
import React from 'react';

class FriendsClass extends React.Component {
    componentDidMount = () => {
        window.addEventListener('scroll', this.onScroll)
        this.getFriends()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
        this.props.nullFriends()
    }

    onScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.body.clientHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (windowHeight + scrollTop >= documentHeight) {
            this.props.upCurrentPage()
            this.getFriends()
        }
    }

    getFriends = () => {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage, true)
    }

    render() {
        return <Friends isFetching={this.props.isFetching}></Friends>
    }
}

let mapStateToProps = state => {
    return {
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
    }
}

// попадает callback
let mapDispatchToProps = {
    nullFriends,
    getUsersThunkCreator
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

// getUsersOnScroll = () => {
    // let seqOfpages = [...Array(this.props.currentPage)].map((_, i) => ++i)
    // let count = this.props.pageSize
    // seqOfpages.forEach(page => {
    //     Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`).then(Response => {
    //         this.props.fetched()
    //         this.props.setUsers(Response.data.items)
    //         // console.log('response sent')
    //     })
    // })
    // }