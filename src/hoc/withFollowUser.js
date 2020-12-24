import React from "react";
import { connect } from "react-redux";
import { followUser, unfollowUser } from "../redux/usersReducer";
import { getAuthId, getFollowed, getProfileId } from "../redux/usersSelectors";
import Swal from "sweetalert2";

export const withFollowUser = (Component) => {
    class withFollowUser extends React.Component {
        changeFollowState = (followed, id) => {
            if (followed) {
                return new Promise(async resolve => {
                    // Swal.fire({
                    //     title: 'Вы уверены?',
                    //     text: "Удалить этого пользователя из друзей?",
                    //     icon: 'question',
                    //     showCancelButton: true,
                    //     confirmButtonColor: '#e64c2d',
                    //     cancelButtonColor: '#5c9ce6',
                    //     confirmButtonText: 'Да',
                    //     cancelButtonText: 'Нет'
                    // }).then((result) => {
                    //     if (result.isConfirmed) {
                    //         this.props.unfollowUser(id)
                    //             .then(() => {
                    //                 Swal.fire(
                    //                     'Удален!',
                    //                     'Вы больше не являетесь другом этого пользователя.',
                    //                     'success'
                    //                 )

                    //                 resolve()
                    //             })
                    //     }
                    //     else {
                    //         resolve()
                    //     }
                    // })

                    let result = await Swal.fire({
                        title: 'Вы уверены?',
                        text: "Удалить этого пользователя из друзей?",
                        icon: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#e64c2d',
                        cancelButtonColor: '#5c9ce6',
                        confirmButtonText: 'Да',
                        cancelButtonText: 'Нет'
                    })

                    if (result.isConfirmed) {
                        await this.props.unfollowUser(id)

                        Swal.fire(
                            'Удален!',
                            'Вы больше не являетесь другом этого пользователя.',
                            'success'
                        )
                        resolve()
                    }
                    else {
                        resolve()
                    }
                })
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
        followed: getFollowed(state),
        id: getProfileId(state),
        authId: getAuthId(state)
    })

    let mapDispatchToProps = {
        followUser, unfollowUser
    }

    return connect(mapStateToProps, mapDispatchToProps)(withFollowUser)
}