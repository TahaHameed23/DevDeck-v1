import {useState, useMemo} from 'react'
import { postStatus, getPosts} from "../../../api/FirestoreAPI"
import ModalPopup from '../Modal/modal'
import PostsCard from '../PostsCard/card'
import { getCurrentTimeStamp } from '../../../helpers/useMoment'
import { getUID } from '../../../helpers/getUniqueID'
import {uploadPostImage} from '../../../api/StorageAPI'
import './index.scss'

export default function NewPost( { currentUser }) {
  
  
  const [status, setStatus] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const[postImage, setPostImage] = useState('')
  let object  = {
    status: status,
    timeStamp:getCurrentTimeStamp('llll'),
    userEmail:currentUser.email,
    userName:currentUser.name,
    userID: currentUser.userID,//changed
    postID:getUID(), 
    postImage:postImage,
  };
  
  
    const sendStatus = async() =>{
        postStatus(object);
        setModalOpen(false)
  }
  useMemo(() =>{
    getPosts(setAllPosts);
  }, [])
  return (
    <div>
    <div className='post-status text-center mb-12 sticky top-0 max-w-max mx-auto'>
      <button className='open-post-modal bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all duration-600 hover:px-8 mt-24' onClick={() => setModalOpen(true)}>
        Start a post
      </button>
    </div>
  


        <ModalPopup setStatus={setStatus}
                    modalOpen={modalOpen} 
                    setModalOpen={setModalOpen}
                    status={status}
                    sendStatus={sendStatus}
                    uploadPostImage={uploadPostImage} 
                    setPostImage={setPostImage}
                    postImage={postImage}
                    className='overflow-y-hidden'>
        </ModalPopup>
        <div>
        {allPosts.map((posts) =>{
          return <PostsCard key={getUID()} posts={posts} ></PostsCard>
          
        })}
        </div>
    </div>
  )
}
