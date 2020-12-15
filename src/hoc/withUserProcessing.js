import { upCurrentPage, nullUsers, getUsersDataThunkCreator, setUsersQuantity, setIsFriends } from "../redux/usersReducer";
import React from 'react';
import { connect } from "react-redux";
import { getPageSize, getUsersData } from '../redux/usersSelectors'


export const withUserProcessing = isWithFriends => Component => {
    class FriendsClass extends React.Component {
        componentDidMount() {
            this.props.setUsersQuantity('')
            window.addEventListener('scroll', this.onScroll)
            this.getUsersData()
            isWithFriends ? this.props.setIsFriends(true) : this.props.setIsFriends(false)
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll)
            this.props.nullUsers()
            // TODO Заменить nullUsers на проверу изменений users (Optimize)
        }

        componentDidUpdate() {

        }

        onScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.body.clientHeight
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (windowHeight + scrollTop >= documentHeight && this.props.currentPage < this.props.maxCurrentPage) {
                console.log(this.props.maxCurrentPage)
                this.props.upCurrentPage()
                this.getUsersData()
            }
        }

        getUsersData = () => {
            this.props.getUsersDataThunkCreator(this.props.pageSize, this.props.currentPage, isWithFriends)
        }

        render() {
            return <Component isFetching={this.props.isFetching} />
        }
    }

    let mapStateToProps = state => {
        return {
            pageSize: getPageSize(state),
            maxCurrentPage: state.users.maxCurrentPage,
            currentPage: state.users.currentPage,
            isFetching: state.users.isFetching,
            usersData: getUsersData(state)
        }
    }

    // попадает callback f`s
    let mapDispatchToProps = {
        upCurrentPage,
        nullUsers,
        getUsersDataThunkCreator,
        setUsersQuantity,
        setIsFriends,
    }

    return connect(mapStateToProps, mapDispatchToProps)(FriendsClass)
}