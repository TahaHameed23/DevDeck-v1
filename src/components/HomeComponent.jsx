import React from 'react';
import NewPost from './common/NewPost'
import background from '../assets/ffflux.svg'
export default function HomeComponent( {currentUser}) {
  return (
    <div style={{background:`url(${background})`,backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <NewPost currentUser={currentUser}></NewPost>
    </div>
  )
}
