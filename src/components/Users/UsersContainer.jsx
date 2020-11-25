import { connect } from 'react-redux'
import { setUsers, upCurrentPage, fetched, fetching, nullFriends } from "../../redux/friendsReducer";
import Users from "./Users";
import React from 'react';
import { usersAPI } from '../../api/api';

class UsersClass extends React.Component {
    componentDidMount = () => {
        window.addEventListener('scroll', this.onScroll)
        this.getUsers()
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
            this.getUsers()
        }
    }

    getUsers = () => {
        this.props.fetching()
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage)
            .then(items => {
                this.props.fetched()
                this.props.setUsers(items)
                // console.log('response sent')
            })

        // this.props.fetching()
        // usersAPI.getFriends()
        //     .then(obj => {
        //         this.props.fetched()
        //         this.props.setUsers(obj.data.response.items)
        //         // console.log('response sent')
        //     })
    }

    render() {
        return <Users friendsData={this.props.friendsData} follow={this.props.follow} unfollow={this.props.unfollow} isFetching={this.props.isFetching}></Users>
    }
}

let mapStateToProps = state => {
    return {
        pageSize: state.friendsPage.pageSize,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
    }
}

let mapDispatchToProps = {
    setUsers,
    upCurrentPage,
    fetched,
    fetching,
    nullFriends
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass)

















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