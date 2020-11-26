import { connect } from 'react-redux'
import React from 'react';
import Feed from './Feed'
import { usersAPI } from '../../api/api';
import { setFeed } from '../../redux/feedReducer'

class FeedClass extends React.Component {
    componentDidMount = () => {
        window.addEventListener('scroll', this.onScroll)
        this.getFeed()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    }

    onScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.body.clientHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (windowHeight + scrollTop >= documentHeight) {
            this.getFeed()
        }
    }

    getFeed = () => {
        // this.props.fetching()
        usersAPI.getVkFeed()
            .then(items => {
                // this.props.fetched()
                this.props.setFeed(items)
            })
    }

    render() {
        return <Feed {...this.props}></Feed>
    }
}

let mapStateToProps = state => {
    return {
        feedPage: state.feedPage
    }
}

let mapDispatchToProps = {
    setFeed
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedClass)

















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