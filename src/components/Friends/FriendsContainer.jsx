/* Ultrashort name _ for root styles*/
import _ from "./Friends.module.css"
import Friends from "./Friends";
import { withUserProcessing } from "../../hoc/withUserProcessing";
import { compose } from "redux";
import React from "react";

const FriendsContainer = props => {
    return (
        <main className={`App-main ${props.isFetching ? "fetching " : "fetched"}`}>
            <section className={_.friends + " App-block"}>
                <Friends></Friends>
            </section>
        </main>
    )
}


export default compose(withUserProcessing(true))(FriendsContainer) //withFriends


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