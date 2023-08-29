import React from 'react';
import { useState } from 'react'
import { editProfile } from '../../../api/FirestoreAPI';

export default function ProfileEdit({onEdit,currentUser}) {
    const [editInputs, setEditInputs] =  useState({});
    const getInput = (event) => {
        let {name, value} = event.target;
        let input = {[name]: value};
        setEditInputs({...editInputs,...input});
    };

    const updateProfileData = () => {
        editProfile(currentUser?.userID, editInputs);
        onEdit();
    }
    
  return (
    <div className='bg-slate-200 min-h-min p-14 mx-4 my-24 rounded-md relative'>
        
        <div className='absolute right-5 top-4 cursor-pointer rounded-sm bg-white px-2'>
            <button onClick={onEdit}>Close</button>
        </div>
        <div className=''>
            <div className='font-semibold text-xl bg-slate-30 mb-5 min-w-min'>Edit your profile</div>
            <div className='grid gap-8 w-auto '>
                <input onChange={getInput} name='name' className='rounded-lg py-2 px-4 outline-none border-none bg-slate-100 text-gray-900' placeholder='Name'/>
                <input onChange={getInput} name='headline' className='rounded-lg py-2 px-4 outline-none border-none bg-slate-100 text-gray-900' placeholder='Headline'/>
                <input onChange={getInput} name='location' className='rounded-lg py-2 px-4 outline-none border-none bg-slate-100 text-gray-900' placeholder='Country'/>
                <input onChange={getInput} name='education' className='rounded-lg py-2 px-4 outline-none border-none bg-slate-100 text-gray-900' placeholder='College'/>
                <input onChange={getInput} name='skills' className='rounded-lg py-2 px-4 outline-none border-none bg-slate-100 text-gray-900' placeholder='Skills'/>
                <input onChange={getInput} name='website' className='rounded-lg py-2 px-4 outline-none border-none bg-slate-100 text-gray-900' placeholder='Website/Portfolio'/>
               
            </div>
        </div>
        <div className='flex justify-center'>
            <button onClick={updateProfileData} className='rounded-full text-white bg-blue-800 px-5 py-2 mt-6'>Save changes</button>
        </div>
    </div>
  )
}
