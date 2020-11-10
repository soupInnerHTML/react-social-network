/* Ultrashort name _ for root styles*/
import _ from './Profile.module.css'
import Posts from './Posts/Posts'
import Info from './Info/Info'
import AddPost from './AddPost/AddPost'

const Profile = props => {
    return (
      <main className="App-main">
        <Info></Info>
        <AddPost dispatch={props.dispatch}></AddPost>
        <Posts postsData={props.profileState.postsData}></Posts>
      </main>
    )
}

export default Profile