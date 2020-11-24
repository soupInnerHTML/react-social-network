/* Ultrashort name _ for root styles*/
import _ from './Post.module.css'
import React from 'react'
import like from '../../../../img/like.svg'
import liked from '../../../../img/liked.svg'
import socket from '../../../../img/socket.jpg'

class Post extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount = () => {
        this.flag = false
    }

    clickOnLike = () => {
        (this.flag = !this.flag) ? this.props.likeThePost(this.props.id) : this.props.unlikeThePost(this.props.id)
        console.log(this.flag)
    }

    // window.counter = counter

    render() {
        return (
            <section className="App-block">
                <div className={_.post}>
                    <div >
                        <img className='avatar' src={(this.props.profileData.photos || { small: '' }).small || socket} alt="" />
                    </div>

                    <div>
                        <p className={_.name}>{this.props.profileData.fullName}</p>
                        <p className={_.date}>23 мая въ 17:24</p>
                    </div>

                    <div className={_.content}>
                        <div className={_.text}>
                            {this.props.text}
                        </div>
                    </div>

                    <div className={_.meta}>
                        <div className={_.likes} onClick={this.clickOnLike}>
                            <img className={_.likeIcon} src={this.flag ? liked : like} alt="" />
                            <span className={`${_.likeCounter} ${this.flag && _.active}`}>{this.props.likes || ''}</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Post