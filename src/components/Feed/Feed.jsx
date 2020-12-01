/* Ultrashort name _ for root styles*/
// import _ from './Feed.module.css'
import News from './News/News'

const Feed = (props) => {
    console.log(props.feedPage.feed)
    return (
        <main className={`App-main ${props.isFetching && "fetching"} fetched`}>
            {
                props.feedPage.feed.map((news, key) => {
                    if (news.attachments) {
                        return <News key={key} {...news.attachments} text={news.text}></News>
                    }
                    if (news.photos) {
                        // return <News key={key} {...news.photos, type: 'wall_post' } text={news.text}></News>
                    }
                })
            }
        </main>
    )
}

export default Feed