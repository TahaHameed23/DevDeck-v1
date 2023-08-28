import NewPost from './common/NewPost'
export default function HomeComponent( {currentUser}) {
  return (
    <div><NewPost currentUser={currentUser}></NewPost></div>
  )
}
