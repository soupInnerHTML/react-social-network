import React from "react";
import Feed from "./Feed"
import Preloader from "../common/Preloader/Preloader";
import { connect } from "react-redux"
import { compose } from "redux";
import { getVkFeedThunkCreator } from "../../redux/feedReducer"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getFeedPage } from "../../redux/usersSelectors";

class FeedClass extends React.Component {
    state = {
        isFeedFetching: true,
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll)
        this.getFeed().then(() => {
            this.setState({
                isFeedFetching: false,
            })
        })
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll)
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
            <main className="App-main">
                { this.state.isFeedFetching ? <Preloader inBlock={ true }></Preloader> : <Feed { ...this.props }></Feed> }
            </main>
        )
    }
}

let mapStateToProps = state => {
    return {
        feedPage: getFeedPage(state),
    }
}

let mapDispatchToProps = {
    getVkFeedThunkCreator,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(FeedClass)


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
