import React from "react";
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../redux/usersReducer";

export const withFollowUser = (Component) => {
    class withFollowUser extends React.Component {
        changeFollowState = (followed, id) => {
            if (followed) {
                if (window.confirm('Вы уверены, что хотите удалить этого пользователя из друзей?')) {
                    return this.props.unfollowUser(id)
                }
                else {
                    return new Promise(resolve => resolve())
                }
            }
            else {
                return this.props.followUser(id)
            }
        }

        render() {
            return (
                <>
                    <Component {...this.props} changeFollowState={this.changeFollowState}></Component>
                </>
            )
        }
    }

    const mapStateToProps = state => ({
        followed: state.profilePage.profileData.followed,
        id: state.profilePage.profileData.userId,
        authId: state.auth.id
    })

    let mapDispatchToProps = {
        followUser, unfollowUser
    }

    return connect(mapStateToProps, mapDispatchToProps)(withFollowUser)
}