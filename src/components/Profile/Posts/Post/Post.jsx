/* Ultrashort name _ for root styles*/
import _ from './Post.module.css'
import LikeIconSrc from './img/like.svg'

const Post = props => {
    return (
        <section className="App-block">
            <div  className={_.post}>
                <div className='avatar'>
                
                </div>

                <div>
                    <p className={_.name}>Ruby Soho</p>
                    <p className={_.date}>23 мая въ 17:24</p>
                </div>

                <div className={_.content}>
                    <div className={_.text}>
                        {props.text}
                    </div>
                </div>

                <div className={_.meta}>
                    <img className={_.likeIcon} src={LikeIconSrc} alt=""/>
                    <span className={_.likeCounter}>{props.likes}</span>
                </div>
            </div>
        </section>
    )
}

export default Post