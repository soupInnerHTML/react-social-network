import React from "react"
import Post from "./Post/Post"
/* Ultrashort name _ for root styles*/
import _ from "./Posts.module.css"

const Posts = ({ postsData, profileData, ...props }) => {
    let { fullName, photos, } = profileData
    let postProps = {
        fullName, photos, ...props,
    }
    return (
        <div className="postLoop">
            {postsData.map(postData => {
                return (
                    <section className={_.posts + " App-block"} key={postData.id}>
                        <Post {...postProps} {...postData}></Post>
                    </section>
                )
            }).reverse()}
        </div>
    )
}

export default Posts