import { connect } from 'react-redux'
import React from 'react';
import Feed from './Feed'
import { getVkFeedThunkCreator } from '../../redux/feedReducer'
import Preloader from '../common/Preloader/Preloader';

class FeedClass extends React.Component {
    state = {
        isFeedFetching: true
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.onScroll)
        this.getFeed().then(() => {
            this.setState({
                isFeedFetching: false
            })
        })
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

    getFeed = () => this.props.getVkFeedThunkCreator()

    render() {
        return (
            <main className={`App-main`}>
                {this.state.isFeedFetching ? <section className="App-block"><Preloader></Preloader></section> : <Feed {...this.props}></Feed>}
            </main>
        )
    }
}

let mapStateToProps = state => {
    return {
        feedPage: state.feedPage
    }
}

let mapDispatchToProps = {
    getVkFeedThunkCreator
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