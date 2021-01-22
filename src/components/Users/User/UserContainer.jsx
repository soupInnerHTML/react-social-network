import User from "./User";
import React from "react"
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../../../redux/usersReducer";
import { compose } from "redux";
import { withFollowUser } from "../../../hoc/withFollowUser";
import { getIsNotAuth, getUsersData, getUsersToChangeFollowState } from "../../../redux/usersSelectors";


class UserClass extends React.Component {
    render() {
        return this.props.usersData.map(userData => (
            <User { ...this.props } { ...userData } key={ userData.id }></User>
        ))
    }
}


let mapStateToProps = (state) => ({
    usersData: getUsersData(state),
    usersToChangeFollowState: getUsersToChangeFollowState(state),
    isNotAuth: getIsNotAuth(state),
})

let mapDispatchToProps = {
    followUser, unfollowUser,
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withFollowUser)(UserClass)