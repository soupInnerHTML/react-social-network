/* Ultrashort name _ for root styles*/
import _ from './Profile.module.css'
import Posts from './Posts/Posts'
import Info from './Info/Info'
import AddPost from './AddPost/AddPost'
import AddPostContainer from './AddPost/AddPostContainer'

const Profile = props => {
  let postsData = props.store.getState().profilePage.postsData
  
  return (
    <main className="App-main">
      <Info></Info>
      <AddPostContainer store={props.store}></AddPostContainer>
      
      <Posts postsData={postsData}></Posts>
    </main>
  )
}

export default Profile