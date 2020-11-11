/* Ultrashort name _ for root styles*/
import _ from './Profile.module.css'
import Posts from './Posts/Posts'
import Info from './Info/Info'
import AddPostContainer from './AddPost/AddPostContainer'

const Profile = props => {
  // let postsData = props.store.getState().profilePage.postsData

  return (
    <main className="App-main">
      <Info></Info>
      <AddPostContainer ></AddPostContainer>
      {/* store={props.store} */}

      <Posts ></Posts>
      {/* postsData={postsData} */}
    </main>
  )
}

export default Profile