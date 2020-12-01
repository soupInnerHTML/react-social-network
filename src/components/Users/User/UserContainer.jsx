import User from "./User";
import React from 'react'
import { connect } from "react-redux";
import { changeFollowStateThunkCreator } from "../../../redux/usersReducer";
import { usersAPI } from "../../../api/api";


class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.follow = id => props.changeFollowStateThunkCreator(id, usersAPI.follow, true)
        this.unfollow = id => props.changeFollowStateThunkCreator(id, usersAPI.unfollow, false)
    }

    changeFollowState = (followed, id) => {
        let pass = () => { return };

        if (followed) {
            window.confirm('Вы уверены, что хотите удалить этого пользователя из друзей?') && pass();
            this.unfollow(id)
        }
        else {
            this.follow(id)
        }
    }

    render() {
        return this.props.friendsData.map(friendData => (
            <User {...this.props} {...friendData} key={friendData.id} changeFollowState={this.changeFollowState}></User>
        ))
    }
}
let mapStateToProps = (state) => ({
    friendsData: state.friendsPage.friendsData,
    usersToChangeFollowState: state.friendsPage.usersToChangeFollowState
})

let mapDispatchToProps = {
    changeFollowStateThunkCreator
}

const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)
export default FriendContainer