import React from 'react';
import {useMemo, useState} from 'react'
import Home from '../Pages/Home'
import { getCurrentUser } from '../api/FirestoreAPI'
import TopBar from '../components/common/TopBar'
export default function HomeLayout() {
  const [currentUser, setCurrentUser] =  useState({})
  useMemo(() => {
      getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
    <TopBar/>
    <Home  currentUser={currentUser} />
    </div>
  )
}
