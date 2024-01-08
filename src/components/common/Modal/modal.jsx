import React from 'react';
import {  Modal,Button } from 'antd';
import { Loader } from 'rsuite';
import {BiImage} from 'react-icons/bi'
import './modal.scss'
const ModalPopup = ({modalOpen, setModalOpen, sendStatus ,setStatus, status,uploadPostImage, setPostImage, postImage}) => {
    return (
    <>
    <Modal
        className='overflow-hidden'
        title="Create a post"
        centered
        open={modalOpen}
        onOk={() => {
                      setStatus('')
                      setModalOpen(false)
                      setPostImage('')
                      setPostImage('')}}
        onCancel={() => setModalOpen(false)}
        onEntered={() => input.current.focus()}
        footer={[
            <Button 
            onClick={sendStatus}
            key="submit" 
            type="primary" 
            disabled={status.length > 0 || postImage.length > 0 ? false: true}
            className='bg-blue-600 min-h-max' >
              Post
            </Button>,
            ]}
      >
        <textarea
            id="modal-input" placeholder='What you want to share?'
            rows={5}
            color={5}
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            className='whitespace-pre-wrap'
            autoFocus />
            <label htmlFor="image"><BiImage  size={28} className='cursor-pointer absolute bottom-6 hover:bg-slate-300 rounded-md'
            /></label>

            {postImage.length > 0 
            ?
            <div className='my-4'>
            <img src={postImage} className='w-40' alt="" />
            </div>
             :
            <></>
            }
            <Loader size="md" backdrop/>
            <input type="file" hidden id="image" 
            onChange={(event) => uploadPostImage(event.target.files[0],setPostImage)} />
            
    </Modal>
    </>
  );
};

export default ModalPopup;