/* Ultrashort name _ for root styles*/
import _ from './Post.module.css'
import React from 'react'
import socket from '../../../../img/socket.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as like } from '@fortawesome/free-solid-svg-icons'
import { faHeart as liked } from '@fortawesome/free-regular-svg-icons'
import Moment from 'react-moment';
import 'moment/locale/ru';

class Post extends React.Component {

    componentDidMount = () => {
        // Moment.locale(ru);
        // console.log(Moment().format('LLLL')); // 'Freitag, 24. Juni 2016 01:42'
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
        let { photos, fullName } = this.props

        return (
            <section className="App-block">
                <div className={_.post} style={{animation: '1s fade'}}>
                    <div >
                        <img className='avatar' src={(photos && photos.small) || socket} alt="" />
                    </div>

                    <div>
                        <p className={_.name}>{fullName}</p>
                        <Moment fromNow>{this.props.postDate}</Moment>
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