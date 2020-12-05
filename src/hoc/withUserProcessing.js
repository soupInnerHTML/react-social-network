import { upCurrentPage, nullUsers, getUsersDataThunkCreator, setUsersQuantity } from "../redux/usersReducer";
import React from 'react';
import { connect } from "react-redux";

export const withUserProcessing = isWithFriends => Component => {
    class FriendsClass extends React.Component {
        componentDidMount() {
            window.addEventListener('scroll', this.onScroll)
            this.getUsersData()
            // this.props.setUsersQuantity(10)
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll)
            this.props.nullUsers()
        }

        componentDidUpdate() {
            // this.props.nullFriends()
        }

        onScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.body.clientHeight
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (windowHeight + scrollTop >= documentHeight && this.props.usersData.length > 99) {
                this.props.upCurrentPage()
                this.getUsersData()
            }
        }

        getUsersData = () => {
            // console.log(this.props.currentPage)
            this.props.getUsersDataThunkCreator(this.props.pageSize, this.props.currentPage, isWithFriends)
        }

        render() {
            return <Component isFetching={this.props.isFetching} />
        }
    }

    let mapStateToProps = state => {
        return {
            pageSize: state.users.pageSize,
            currentPage: state.users.currentPage,
            isFetching: state.users.isFetching,
            usersData: state.users.usersData
        }
    }

    // попадает callback
    let mapDispatchToProps = {
        upCurrentPage,
        nullUsers,
        getUsersDataThunkCreator,
        setUsersQuantity
    }

    return connect(mapStateToProps, mapDispatchToProps)(FriendsClass)
}