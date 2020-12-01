/* Ultrashort name _ for root styles*/
import _ from './News.module.css'

const News = (props) => {
    let news = () => {
        let output = []

        for (let item in props) {

            let objectFeed = props[item]

            props.text && output.push(<p className={_.newsText}>{props.text}</p>)

            switch (objectFeed.type) {
                case "photo":
                    output.push(<img src={objectFeed.photo.photo_604} alt="" />)
                    break
                case "link":
                    output.push(<a href={objectFeed.link.url}>{objectFeed.link.description}</a>)
                    break
                case "audio":
                    output.push(<audio controls src={objectFeed.audio.url}></audio>)
                    break
                default:
                    break
            }
        }

        return output
    }
    return (
        <section className="App-block" id={props.id}>
            {
                news()
            }
        </section>
    )
}

export default News