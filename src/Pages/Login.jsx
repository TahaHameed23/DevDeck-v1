import React,{ useEffect, useState} from 'react'
import Logincompo from '../components/logincompo'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader';
export default function Login ()  {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate()
  useEffect(() =>{
  onAuthStateChanged(auth, (res) => {
    if(res?.accessToken){
      navigate('/home')
    }
    else{
      setLoading(false);
    }
    });
  }, []);
  return loading ? <Loader /> : <Logincompo /> 
  
}

