/* Ultrashort name _ for root styles*/
// import _ from "./Users.module.css"
import UserContainer from "./User/UserContainer";
import { withUsersQuantity } from "../../hoc/withUsersQuantity";

// const Users = (props) => {
//     return (
//         <UserContainer></UserContainer>
//     )
// }

export default withUsersQuantity(UserContainer)