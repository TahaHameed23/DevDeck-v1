import React from 'react';
import { BiUpvote, BiSolidUpvote, BiCommentDetail  } from 'react-icons/bi'
import { LikePost,getLikesByUser, postComment,getComments, getCurrentUser } from '../../../api/FirestoreAPI'
import { getUID } from '../../../helpers/getUniqueID'
import { CurrentTimeStamp } from '../../../helpers/useMoment'
import { toast } from 'react-toastify';
import { useMemo, useState } from 'react';
export default function LikeButton({userId, postId, currentUser}) {
  const [likesCount, setLikesCount] =useState(0);
  const [liked, setLiked] =useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment ] = useState('');
  const [comments, setComments ] = useState([]);
  const [commentBtn, setCommentBtn] = useState(false)
  // const [error, setError] = useState('');
  
  const getComment = (event) =>{
    setComment(event.target.value);
   
  }
  const addComment = async() =>{
    let userId
    if (comment.length===0){
      setCommentBtn(false)
    }
    else{
      setCommentBtn(true)
      postComment(currentUser?.name ,postId, comment, CurrentTimeStamp())
      setComment('')
    }
  
  }
  const handleClick = () => {
    LikePost(userId, postId, liked);
  }

  useMemo(() => {
    getLikesByUser(userId, postId, setLikesCount, setLiked);
    getComments(postId, setComments)
  }, [userId, postId])
  
  return (
    <div>
    <div className='flex my-2 pt-3 border-t-2 border-slate-600 border-opacity-[.2]'>
      <div onClick={handleClick} className='flex align-middle mx-2 p-2 cursor-pointer transition-all hover:bg-slate-400 hover:duration-500 active:duration-1000 active:ease-in-out rounded-md active:bg-slate-500'>
        {liked ? <BiSolidUpvote size={22} /> :<BiUpvote size={22}/>}
        <p className='ml-2'>{liked ? 'Upvoted' : 'Upvote'} </p>
      <span className='mx-2 bg-slate-400 rounded-full px-2'>{likesCount}</span>
      </div>
      <div onClick={() => setShowCommentBox(!showCommentBox)} className='flex align-middle mx-4 p-2 cursor-pointer hover:bg-slate-400 rounded-md transition-all duration-1000 focus:duration-700'>
        <BiCommentDetail size={22}/>
        <p className='ml-2'>Comment</p>
      </div>
   </div>
   {showCommentBox ? <>
    <div className='flex flex-col lg:flex-row mx-4 active:duration-700'>
      <input onChange={getComment} value={comment} name='comment' type="text" placeholder='Add a comment' className='py-4 px-2 rounded-lg w-100 lg:w-8/12 my-2 outline-none lg:mr-4  ' />
      <div>
      <button disabled={commentBtn} className='bg-blue-500 p-2 flex  mt-2 rounded-lg transition-all hover:duration-400 text-slate-800 hover:shadow-md active:shadow-none hover:shadow-slate-800 '
      onClick={addComment}
      >Add comment</button> 
      </div>
    </div>
    {comments.length > 0 ? comments.map((comment) => {
        return(
          <div key={getUID()}
          className='p-4 my-4 bg-slate-300 rounded-md mx-4  relative'>
              <p className='text-lg font-semibold'>{comment.name}</p>
              <p className='mt-2 mb-3'>{comment.comment}</p>
              <hr className='bg-black' />
              <p className='text-xs relative font-light mt-1 '>{comment.timeStamp}</p>
          </div>
        )
      }) : <></>} 
    </> : <></>}
    

    </div>
  )
}
