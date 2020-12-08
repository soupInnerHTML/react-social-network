/* Ultrashort name _ for root styles*/
import Info from './Info/Info'
import AddPostContainer from './AddPost/AddPostContainer'
import PostsContainer from './Posts/PostsContainer'
import React from 'react'

const Profile = props => {
  return (
    <main className={`App-main ${props.isFetching && "fetching"} fetched`}>
      <Info {...props}></Info>
      {props.id === props.profileData.userId && !props.isFetching && <AddPostContainer ></AddPostContainer>}
      <PostsContainer ></PostsContainer>
    </main>
  )
}

export default Profile