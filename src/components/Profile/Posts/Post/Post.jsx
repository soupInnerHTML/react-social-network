/* Ultrashort name _ for root styles*/
import _ from './Post.module.css'
import LikeIconSrc from '../../../../img/like.svg'
import LikedIconSrc from '../../../../img/liked.svg'
import React from 'react'

class Post extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount = () => {
        this.flag = false
    }

    clickOnLike = () => {
        (this.flag = !this.flag) ? this.props.likeThePost(this.props.postID) : this.props.unlikeThePost(this.props.postID)
        console.log(this.flag)
    }

    // window.counter = counter

    render() {
        return (
            <section className="App-block">
                <div className={_.post}>
                    <div className='avatar'>

                    </div>

                    <div>
                        <p className={_.name}>Ruby Soho</p>
                        <p className={_.date}>23 мая въ 17:24</p>
                    </div>

                    <div className={_.content}>
                        <div className={_.text}>
                            {this.props.text}
                        </div>
                    </div>

                    <div className={_.meta}>
                        <div className={_.likes} onClick={this.clickOnLike}>
                            <img className={_.likeIcon} src={this.flag ? LikedIconSrc : LikeIconSrc} alt="" />
                            <span className={`${_.likeCounter} ${this.flag && _.active}`}>{this.props.likes || ''}</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Post