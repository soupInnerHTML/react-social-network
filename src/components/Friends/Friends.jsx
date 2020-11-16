/* Ultrashort name _ for root styles*/
import _ from './Friends.module.css'
import Friend from "./Friend/Friend";
import Axios from 'axios';
import React from 'react'

class Friends extends React.Component {
    constructor(props) {
        super(props)
        this.friendsObject = this.props.friendsData.map(friendData => (
            <Friend
                name={friendData.name}
                avatar={friendData.photos.small}
                isFollowed={friendData.isFollowed}
                friendId={friendData.id}
                follow={props.follow} unfollow={props.unfollow} ></Friend>)
        )
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
        this.getUsers()
    }

    componentWillUnmount() {
        // window.confirm('Вы уверены что хотите закрыть страницу?')
    }

    onScroll = () => {
        const windowHeight = window.innerHeight
        const documentHeight = document.body.clientHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (windowHeight + scrollTop >= documentHeight) {
            this.props.upCurrentPage()
            this.getUsers()
        }
    }

    getUsers = () => {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(Response => {
            this.props.setUsers(Response.data.items)
            console.log('response was sent')
        })
    }

    render() {
        return (
            <main className="App-main">
                <section className={_.friends + " App-block"}>
                    {this.friendsObject}
                </section>
            </main>
        )
    }
}

export default Friends