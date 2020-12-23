import React from "react"
import Info from "./Info/Info"
import AddPostContainer from "./AddPost/AddPostContainer"
import PostsContainer from "./Posts/PostsContainer"
import cs from "classnames"

const Profile = ({ status, idFromUri, profileData, ...props }) => {
    return (
        <main className={ cs("App-main", props.isFetching ? "fetching" : "fetched") }>
            <Info {...{ profileData, status, } }></Info>
            <AddPostContainer></AddPostContainer>
            <PostsContainer></PostsContainer>
        </main>
    )
}

export default Profile