/* Ultrashort name _ for root styles*/
import _ from './Post.module.css'
import React from 'react'
import socket from '../../../../img/socket.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as like } from '@fortawesome/free-solid-svg-icons'
import { faHeart as liked } from '@fortawesome/free-regular-svg-icons'

class Post extends React.Component {

    componentDidMount = () => {

    }

    clickOnLike = () => {
        if (this.props.liked) {
            this.props.unlikeThePost(this.props.id)
        }
        else {
            this.props.likeThePost(this.props.id)
        }
    }

    // window.counter = counter

    render() {
        let { photos, fullName } = this.props.profileData
        return (
            <section className="App-block">
                <div className={_.post}>
                    <div >
                        <img className='avatar' src={(photos && photos.small) || socket} alt="" />
                    </div>

                    <div>
                        <p className={_.name}>{fullName}</p>
                        <p className={_.date}>23 мая въ 17:24</p>
                    </div>

                    <div className={_.content}>
                        <div className={_.text}>
                            {this.props.text}
                        </div>
                    </div>

                    <div className={_.meta}>
                        <div className={this.props.liked ? `${_.likes} ${_.active}` : _.likes} onClick={this.clickOnLike}>
                            {this.props.liked ? <FontAwesomeIcon icon={like}></FontAwesomeIcon> : <FontAwesomeIcon icon={liked}></FontAwesomeIcon>}
                            <span className={_.likesQty}>{this.props.likes || ''}</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Post