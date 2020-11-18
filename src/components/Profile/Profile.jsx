/* Ultrashort name _ for root styles*/
import Info from './Info/Info'
import AddPostContainer from './AddPost/AddPostContainer'
import PostsContainer from './Posts/PostsContainer'

const Profile = props => {
  return (
    <main className="App-main">
      <Info {...props}></Info>
      <AddPostContainer ></AddPostContainer>
      <PostsContainer></PostsContainer>
    </main>
  )
}

export default Profile