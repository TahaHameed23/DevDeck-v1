import React from 'react';
import { useMemo } from 'react'
import './card.scss'
import {  useNavigate } from 'react-router-dom'
import LikeButton from '../PostReaction/LikeButton'
import { BsTrash } from 'react-icons/bs'
import { deletePost, getAllUsersImg, getCurrentUser } from '../../../api/FirestoreAPI'
import { useState } from 'react'
export default function PostsCard( {id, posts}) {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({})
  const [allUsers,setAllUsers] = useState([])
  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsersImg(setAllUsers)
  },[])
  return (
    <div className='bg-[rgba(255,255,255,0.25)] backdrop-blur-md m-2 mx-auto rounded-lg min-h-max p-4 w-[85vw] lg:w-[70vw]  flex flex-col justify-start sm:overflow-x-hidden'>
      <div className='-mb-2'>
        <img src={allUsers
          .filter((item) => item.id === posts.userID)
          .map((item) => item.imageURL)} className='w-[60px] h-[60px] lg:w-[4em] lg:h-[4em] object-cover rounded-full bg-white'/>
      </div>
      {currentUser.userID===posts.userID ?
      
        <BsTrash className='cursor-pointer absolute left-[16rem] md:left-[38rem] lg:left-[44rem]' size={22} onClick={()=>deletePost(posts.id)}  />
  
      : <></>
      }
    <div key={id} className='posts-card'>
      <div className='mb-4 ml-20 -mt-10'>
      <span onClick={() => 
        navigate('/profile',{
          state:
          {
            id:posts.userID, 
            email: posts.userEmail
          },
        })
      } 
  
        className='font-semibold hover:underline hover:cursor-pointer hover:text-blue-600'>{posts.userName}
      </span>
      <p className='text-xs text-[rgba(0,0,0,0.6)]'>{posts.timeStamp}</p>
      </div>
      <p className='ml-2 py-4'>{posts.status}</p>
      {posts.postImage ?
    (<div className='mb-6' >
      <img className='object-contain' src={posts.postImage} alt="" />
    </div>)
    :<></>}
      <LikeButton userId={currentUser?.userID} postId={posts.id} currentUser={currentUser} />
    </div>
    
    
  </div>
  )
  
}


