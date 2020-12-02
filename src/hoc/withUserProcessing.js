import { upCurrentPage, nullFriends, getUsersThunkCreator } from "../redux/usersReducer";
import React from 'react';
import { connect } from "react-redux";

export const withUserProcessing = (Component, isWithFriends) => {
    class FriendsClass extends React.Component {
        componentDidMount = () => {
            if (this.)
                window.addEventListener('scroll', this.onScroll)
            this.getFriends()
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll)
            this.props.nullFriends()
        }

        onScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.body.clientHeight
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (windowHeight + scrollTop >= documentHeight) {
                this.props.upCurrentPage()
                this.getFriends()
            }
        }

        getFriends = () => {
            this.props.getUsersThunkCreator(this.props.pageSize, this.props.currentPage, isWithFriends)
        }

        render() {
            return <Component isFetching={this.props.isFetching}></Component>
        }
    }

    let mapStateToProps = state => {
        return {
            pageSize: state.friendsPage.pageSize,
            currentPage: state.friendsPage.currentPage,
            isFetching: state.friendsPage.isFetching
        }
    }

    // попадает callback
    let mapDispatchToProps = {
        upCurrentPage,
        nullFriends,
        getUsersThunkCreator
    }

    return connect(mapStateToProps, mapDispatchToProps)(FriendsClass)
}