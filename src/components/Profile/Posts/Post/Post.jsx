/* Ultrashort name _ for root styles*/
import _ from "./Post.module.css"
import React, { useState } from "react"
import socket from "../../../../img/socket.jpg"
import Moment from "react-moment";
import "moment/locale/ru";
import cs from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as faLike } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faLiked, faCommentAlt } from "@fortawesome/free-regular-svg-icons"
import CommentsContainer from "../Comments/CommentsContainer";

let Post = ({ photos, fullName, id, liked, likes, postDate, text, comments, ...props }) => {
    
    let clickOnLike = () => {
        if (liked) {
            props.unlikeThePost(id)
        }
        else {
            props.likeThePost(id)
        }
    }

    let [click, setClick] = useState(0)


    return (
        <section className="App-block">
            <div className={ _.post } style={ { animation: "1s fade", } }>
                <div>
                    <img className='avatar' src={ (photos && photos.small) || socket } alt="" />
                </div>

                <div>
                    <p className={ _.name }>{ fullName }</p>
                    <Moment fromNow>{ postDate }</Moment>
                </div>

                <div className={ _.content }>
                    <div className={ _.text }>
                        { text }
                    </div>
                </div>

                <div className={ _.meta }>
                    <div className={ cs( { [_.active]: liked, }, _.likes) } onClick={ clickOnLike }>
                        <FontAwesomeIcon icon={ liked ? faLike : faLiked }></FontAwesomeIcon>
                        <span className={ _.likesQty }>{ likes || "" }</span>
                    </div>

                    <div className={ _.likes } onClick={ () => setClick(click + 1) }>
                        <FontAwesomeIcon icon={ faCommentAlt }></FontAwesomeIcon>
                        <span className={ _.likesQty }>{ comments.length || "" }</span>
                    </div>
                </div>

                <CommentsContainer { ...{ comments, id, socket, fullName, click, } }></CommentsContainer>
            </div>
        </section>
    )
}

export default Post