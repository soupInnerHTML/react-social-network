import { connect } from "react-redux"
import Posts from "./Posts"
import { likeThePost, unlikeThePost } from "../../../redux/profileReducer"
import { getPostsData, getProfileData } from "../../../redux/usersSelectors"

let mapStateToProps = state => ({
    postsData: getPostsData(state),
    profileData: getProfileData(state),
})

let mapDispatchToProps = {
    likeThePost,
    unlikeThePost,
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer