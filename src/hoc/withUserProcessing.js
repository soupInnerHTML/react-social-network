import React from "react";
import cs from "classnames"
import { upCurrentPage, nullUsers, getUsersDataThunkCreator, setUsersQuantity, setIsFriends } from "../redux/usersReducer";
import { connect } from "react-redux";
import { getCurrentPage, getPageSize, getUsersData, maxCurrentPage } from "../redux/usersSelectors"
import { withFetching } from "./withFetching";
import { compose } from "redux";


export const withUserProcessing = isWithFriends => Component => {
    class FriendsClass extends React.Component {
        async componentDidMount() {
            this.props.setUsersQuantity("")
            window.addEventListener("scroll", this.onScroll)
            await this.getUsersData()
            this.props.setFetching(false)
            isWithFriends ? this.props.setIsFriends(true) : this.props.setIsFriends(false)
        }

        componentWillUnmount() {
            window.removeEventListener("scroll", this.onScroll)
            this.props.nullUsers()
        }

        onScroll = async () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.body.clientHeight
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (windowHeight + scrollTop >= documentHeight && this.props.currentPage < this.props.maxCurrentPage) {
                this.props.upCurrentPage()
                this.props.setFetching(true)

                await this.getUsersData()
                this.props.setFetching(false)
            }
        }

        getUsersData = () => {
            return this.props.getUsersDataThunkCreator(this.props.pageSize, this.props.currentPage, isWithFriends)
        }

        render() {
            let { isFetching, } = this.props
            return (
                <main className={cs("App-main", isFetching ? "fetching" : "fetched", "fetcher")}>
                    <section className="usersLoop App-block">
                        <Component isFetching={isFetching} />
                    </section>
                </main >
            )
        }
    }

    let mapStateToProps = state => {
        return {
            pageSize: getPageSize(state),
            maxCurrentPage: maxCurrentPage(state),
            currentPage: getCurrentPage(state),
            usersData: getUsersData(state),
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

    return compose(connect(mapStateToProps, mapDispatchToProps), withFetching())(FriendsClass)
}