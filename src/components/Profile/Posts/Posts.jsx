import React from 'react'
import Post from './Post/Post'
/* Ultrashort name _ for root styles*/
import _ from './Posts.module.css'

const Posts = ({ postsData, ...props }) => {
    return (
        <div className="postLoop">
            {postsData.map(postData => {
                return (
                    <section className={_.posts + ' App-block'} key={postData.id}>
                        <Post {...props} {...postData} ></Post>
                    </section>
                )
            }).reverse()}
        </div>
    )
}

export default Posts