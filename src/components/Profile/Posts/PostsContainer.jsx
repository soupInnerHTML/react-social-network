import { connect } from "react-redux"
import Posts from "./Posts"
import { likeThePost, unlikeThePost } from '../../../redux/profileReducer'

let mapStateToProps = state => ({
    postsData: state.profilePage.postsData
})

let mapDispatchToProps = {
    likeThePost,
    unlikeThePost
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer