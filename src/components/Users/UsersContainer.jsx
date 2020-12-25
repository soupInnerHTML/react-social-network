import { compose } from "redux";
import { withUserProcessing } from "../../hoc/withUserProcessing";
import Users from "./Users";
import _ from "./Users.module.css"

// const UserContainer = (props) => {
//     return (
//         <Users></Users>
//     )
// }

export default compose(withUserProcessing())(Users)


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