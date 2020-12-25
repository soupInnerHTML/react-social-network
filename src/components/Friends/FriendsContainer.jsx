/* Ultrashort name _ for root styles*/
// import _ from "./Friends.module.css"
import Friends from "./Friends";
import { withUserProcessing } from "../../hoc/withUserProcessing";
import { compose } from "redux";


// const FriendsContainer = props => {
//     return (
//         <Friends></Friends>
//     )
// }


export default compose(withUserProcessing(true))(Friends) //withFriends


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