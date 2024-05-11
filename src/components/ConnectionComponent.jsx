import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useState,useMemo } from 'react'
import { getAllUsersImg } from '../api/FirestoreAPI';
import pp from "../assets/blank-profile-picture.webp"
import Topbar from './common/TopBar';

export default function ConnectionComponent({ currentUser }) {
    let navigate = useNavigate();
    const [allUsers, setAllUsers] = useState([]);
    useMemo(() => {
        getAllUsersImg(setAllUsers);
    }, []);

    return (
        <>
            <Topbar currentUser={currentUser} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-6 my-8">
            {allUsers
                .filter((user) => user.id !== currentUser.userID)
                .map((user) => {
                    return (
                        <div key={user.id} className="bg-white text-center rounded-lg shadow-md p-4">
                            <img
                                src={user.imageURL ? user.imageURL : pp}
                                alt=""
                                className="w-24 mx-auto rounded-xl shadow-lg shadow-slate-600"
                                onClick={()=>{
                                    navigate('/profile',{
                                        state:{
                                            id:user.id,
                                            email:user.email
                                        }
                                    })
                                    
                                }}
                            />
                            <div  onClick={()=>{
                                    navigate('/profile',{
                                        state:{
                                            id:user.id,
                                            email:user.email
                                        }
                                    })
                                }}
                                 className="text-center font-bold hover:underline cursor-pointer mx-auto mt-4 w-max">{user.name.toUpperCase()}</div>
                           <button className="bg-slate-400 mt-6 p-2 rounded-xl shadow-lg transition-all shadow-slate-400 hover:px-4">Connect</button>
                        </div>
                    );
                })}
        </div>
        </>
    );
}

