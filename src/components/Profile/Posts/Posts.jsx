import Post from './Post/Post'
/* Ultrashort name _ for root styles*/
import _ from './Posts.module.css'

const Posts = props => {
    return (
        <div className="postLoop">
            {props.postsData.map(postData => {
                return (
                    <section className={_.posts + ' App-block'} key={postData.id}>
                        <Post text={postData.text} likes={postData.likes} key={postData.id} postID={postData.id} unlikeThePost={props.unlikeThePost} likeThePost={props.likeThePost}></Post>
                    </section>
                )
            }).reverse()}
        </div>
    )
}

export default Posts