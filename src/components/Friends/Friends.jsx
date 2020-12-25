/* Ultrashort name _ for root styles*/
// import _ from "./Friends.module.css"
import FriendContainer from "./Friend/FriendContainer";
import { withUsersQuantity } from "../../hoc/withUsersQuantity";

// const Friends = (props) => {
//     return (
//         <FriendContainer></FriendContainer>
//     )
// }

export default withUsersQuantity(FriendContainer)