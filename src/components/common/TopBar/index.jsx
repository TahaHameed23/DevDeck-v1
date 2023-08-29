import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { HiOutlineUserCircle } from  'react-icons/hi'
import './index.scss'
import logo from '../../../assets/logo.png'
import ProfilePopup from '../ProfilePopup/ProfilePopup'



export default function Topbar({ currentUser }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };
  
  // useEffect(() => {
  //   getAllUsers(setUsers);
  // }, []);
  return (
    
  <div className='topbar-main bg-[#001341] flex relative justify-between py-4 px-6 overflow-y-hidden '>
  <div className="flex items-center">
      {popupVisible ? (
          <div className="fixed text-black py-3 px-2 right-[10px] top-[65px] z-50 rounded-lg ">
            <ProfilePopup className='cursor-pointer' />
          </div>
        ) : (
          <></>
        )}
    <img src={logo} alt="Logo" className='md:mr-32 h-9 w-10 m-3 mr-12' />
    <div className="mouse mr-12 md:mr-[18rem] lg:mx-56 lg:mr-64 text-xl font-semibold cursor-pointer" onClick={() => { goToRoute('/home') }}>
      Home
    </div>
    <div className="mouse text-xl font-semibold  cursor-pointer" onClick={() => { goToRoute('/news') }}>
      News
    </div>
  </div>

  <div className="flex items-center">
    <div className="cursor-pointer hover:text-blue-500">
      <HiOutlineUserCircle size={25} onClick={displayPopup} className='icon text-white hover:text-slate-400' />
    </div>
  </div>
</div>

  )
}
