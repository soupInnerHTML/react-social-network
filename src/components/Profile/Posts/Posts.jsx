/* Ultrashort name _ for root styles*/
import _ from './Posts.module.css'
import Post from './Post/Post'

const Posts = props => {

    console.log(props)

    // let postsObject = props.postsData.map(postData => {
    //     return (
    //         <section className={_.posts + ' App-block'}>
    //             <Post text={postData.text} likes={postData.likes}></Post>
    //         </section>
    //     )
    // }).reverse()

    return (
        <div className="postLoop">
            {/* {postsObject} */}
        </div>
    )
}

export default Posts