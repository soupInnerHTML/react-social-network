/* Ultrashort name _ for root styles*/
// import _ from './Feed.module.css'
import News from "./News/News"
import { v4 as key } from "uuid";
import React from "react";

const Feed = (props) => {
    return (
        props.feedPage.feed.filter(news => news.attachments).map((news) => {
            // if (news.attachments) {
            return <News key={ key() } { ...news.attachments } text={ news.text }></News>
            // }
            // if (news.photos) {
            //     return <News key={key} {...news.photos, type: 'wall_post' } text={news.text}></News>
            // }
        })
    )
}

export default Feed