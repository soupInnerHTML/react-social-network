/* Ultrashort name _ for root styles*/
import _ from './News.module.css'
import { v4 as key } from 'uuid';
import React from 'react';

const News = (props) => {
    let news = () => {
        let output = []

        for (let item in props) {

            let objectFeed = props[item]

            props.text && output.push(<p key={key()} className={_.newsText}>{props.text}</p>)

            switch (objectFeed.type) {
                case "photo":
                    output.push(<img key={key()} src={objectFeed.photo.photo_604} alt="" />)
                    break
                case "link":
                    output.push(<a key={key()} href={objectFeed.link.url}>{objectFeed.link.description}</a>)
                    break
                case "audio":
                    output.push(<audio key={key()} controls src={objectFeed.audio.url}></audio>)
                    break
                default:
                    break
            }
        }

        return output
    }
    return (
        <section className="App-block">
            {
                news()
            }
        </section>
    )
}

export default News