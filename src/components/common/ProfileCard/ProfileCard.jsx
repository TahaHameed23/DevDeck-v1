import React from 'react';
import {useState, useMemo} from 'react'
import { useLocation,Link } from 'react-router-dom';
import { uploadImage as uploadImageAPI } from '../../../api/StorageAPI';
import { getSingleStatus,getSingleUser } from '../../../api/FirestoreAPI';
import PostsCard from '../PostsCard/card'
import {Modal, Button, Progress} from 'antd';
import { BiSolidEdit} from 'react-icons/bi';
import pp from "../../../assets/blank-profile-picture.webp"

export default function ProfileCard({ onEdit, currentUser }) {
  const [allPosts, setAllPosts] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [currentImage, setCurrentImage] = useState({})
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] =  useState(false)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading]= useState(false)
    const getImage = (event) => {
        setCurrentImage(event.target.files[0])
        setImage(true)
    } 
    const uploadImage=() =>{
        uploadImageAPI(currentImage, currentUser.userID, setModalOpen, setProgress, setLoading,setCurrentImage)
        setLoading(true)
        
      }
  let location = useLocation();
  
  
  useMemo(() =>{
    if (location?.state?.id){
      getSingleStatus(setAllPosts, location?.state?.id);
    }
    if (location?.state?.email){
      console.log("ok");
      getSingleUser(setCurrentProfile, location?.state?.email);
  
    }
    }, [])
const bgColor = image===true ? 'bg-blue-400' : ''
  return(
    <>
     <div className='bg-[rgba(255,255,255,0.45)] backdrop-blur-lg min-h-min py-4 px-3 mx-4 my-24 rounded-md relative'>
       
    <Modal 
    open={modalOpen}
    onCancel={() => setModalOpen(false)}
    onOk={() => setModalOpen(false)}
    width={290}
    title='Add/change profile image'
    footer={[
      <Button 
      onClick={uploadImage}
      key="submit" 
      type="primary" 
      loading={loading}
      disabled={!image}
      className='bg-blue-600 min-h-max' >
        Upload
      </Button>

      ]}>
      <div className=''>
        <input id='file-input' type="file" onChange={getImage} className='hidden'/>
        <label className={`${bgColor} flex justify-center align-middle ml-16 underline hover:shadow-sm hover:shadow-slate-500 hover:py-4 transition-all duration-600 rounded-md p-2 cursor-pointer select-none w-[6.5rem]`} htmlFor="file-input">Select a file</label>
        {progress===0 ? (<></>) : 
        (<div className='ml-24 my-2'>
          <Progress size={40}  type='circle' percent={progress} />
        </div>)}
        
      </div>
      </Modal>
      <div className='relative  mb-8'>
        {Object.values(currentProfile).length === 0 ? (
          <img src={Object.values(currentProfile).length === 0
            ? currentUser.imageURL
            : currentProfile?.imageURL ? currentProfile.imageURL: pp  }
             alt="Profile-Image" className='w-32 h-32 rounded-full opacity-100 border-2 object-cover hover:opacity-60' onClick={() => setModalOpen(true)} />) : (
            <img src={Object.values(currentProfile).length === 0
              ? currentUser.imageURL
              : currentProfile?.imageURL ? currentProfile.imageURL: pp} alt="Profile-Image" className='w-32 h-32 rounded-full opacity-100 border-2 object-cover hover:opacity-60' />
          )}
      </div>
        <div className='absolute right-5 top-4 cursor-pointer rounded-sm px-2'>
        {Object.values(currentProfile).length === 0 ? 
        <button className='p-4 ' onClick={onEdit}><BiSolidEdit size={25} 
        className='hover:bg-slate-100 rounded-md' /></button>
        : <></>}
        </div>
      
        <div>
          <h3 className='font-semibold text-xl px-4'>
            {Object.values(currentProfile).length === 0
                ? currentUser.name
                : currentProfile?.name}
          </h3>
        </div>
        <div className=' flex flex-col ml-4  gap-4'>
          <div className=''>
            <span className='text-sm font-normal'>
            {Object.values(currentProfile).length === 0
                ? currentUser.headline
                : currentProfile?.headline}
              </span>
          </div>
          <div className='flex'>
              
              <Link reloadDocument='true' relative='path' to={Object.values(currentProfile).length === 0
                ? `${currentUser.website}`//TODO: fix relative path
                : `${currentProfile?.website}`}
                className='text-blue-600 underline'>
                  {Object.values(currentProfile).length === 0
                ? currentUser.website
                : currentProfile?.website}
                
              </Link>
          </div>
          <div>
            <span><span className='font-semibold'>Skills: </span>
            {Object.values(currentProfile).length === 0
                ? currentUser.skills
                : currentProfile?.skills}
            </span>
          </div>
          <div>
            <span> {Object.values(currentProfile).length === 0
                ? currentUser.location
                : currentProfile?.location}
                </span>
          </div>
          <div>
            <span>
            {Object.values(currentProfile).length === 0
                ? currentUser.education
                : currentProfile?.education}
            </span>
          </div>
        </div>
        
    </div>
    <div className=' my-12 py-6'>
    {allPosts?.map((posts) => {
          return (
            <div key={posts.id}>
              <PostsCard posts={posts} />
            </div>
          );
        })}

    </div>
    </>
      )
}
