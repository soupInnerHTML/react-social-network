import React from "react"
import Info from "./Info/Info"
import AddPostContainer from "./AddPost/AddPostContainer"
import PostsContainer from "./Posts/PostsContainer"

const Profile = props => {
    return (
        <main className={`App-main ${props.isFetching ? "fetching" : "fetched"}`}>
            <Info {...props}></Info>
            {!props.match.params.userId && <AddPostContainer></AddPostContainer>}
            <PostsContainer ></PostsContainer>
        </main>
    )
}

export default Profile