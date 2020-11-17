import { connect } from "react-redux"
import Posts from "./Posts"
import Post from './Post/Post'
/* Ultrashort name _ for root styles*/
import _ from './Posts.module.css'

// Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {

// })

let mapStateToProps = state => {
    return {
        postsObject: state.profilePage.postsData.map(postData => {
            return (
                <section className={_.posts + ' App-block'} key={postData.id}>
                    <Post text={postData.text} likes={postData.likes} key={postData.id}></Post>
                </section>
            )
        }).reverse()
    }


}

let mapDispatchToProps = dispatch => {
    return {

    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer