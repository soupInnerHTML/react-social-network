import React from "react"
import Post from "./Post/Post"
/* Ultrashort name _ for root styles*/
import _ from "./Posts.module.css"

const Posts = ({ postsData, profileData, ...props }) => {
    console.log("render")
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

export default React.memo(Posts, (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps)
});