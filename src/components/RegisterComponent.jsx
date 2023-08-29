import React from 'react';
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI'
import { postUserData } from '../api/FirestoreAPI';
import GoogleButton from 'react-google-button'
import { LoadingButton } from '@mui/lab';
import { getUID } from '../helpers/getUniqueID'
import '../styles/Login.scss'
import logo from '../assets/logo.png'
import background from '../assets/dddepth-152.jpg'
export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials ]= useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const register = async () => {
    try{
      setLoading(true);
       await RegisterAPI(credentials.email, credentials.password);
      
        postUserData({ 
          userID:getUID(),
          name:credentials.name, 
          email:credentials.email
        });
        navigate('/home');
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("userName", credentials.name);

    
    }
    catch(error){
      console.error("error",error.message);
      setLoading(false);
      setError('Cannot create account!');
    }
  };
  const googleSignIn = () => {
    GoogleSignInAPI();
    navigate('/home');
  }
  //mtahakhan2003 @gmail.com
  return (
    <div style={{background:`url(${background})`,backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="login-wrapper bg-no-repeat bg-cover">
      <div className="header flex justify-center items-center gap-4">
      <img src={logo} className="w-10 h-8"  />
      <span className='text-white font-bold text-3xl'>DevDeck</span>
      </div>
      <div className="login-wrapper-inner">
        <h1 className="heading">Sign In</h1>
        <p className="sub-heading text-lg lg:text-2xl">Join the community of developers</p>

        <div className="auth-inputs">
        <input
            onChange={(event) =>
              setCredentials({ ...credentials, name: event.target.value })
            }
            type="text"
            className="common-input"
            placeholder="Your name"
            required
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
            required
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
        </div>
        
        {error && <p className="error" style={{marginTop:0+'rem'}}>{error}</p>}
        <LoadingButton
          className='login-btn'
          size="small"
          onClick={register}
          loading={loading}
          loadingPosition="end"
          endIcon="UP"
          variant="contained"
          style={{borderRadius:14}}
        >
          <span>Sign</span>
        </LoadingButton>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
      <GoogleButton 
        className='google-btn'
        style={{borderRadius:5}}
        onClick={googleSignIn}
      />
        <p className="go-to-signup ">
          Aleady on DevDeck?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Log in
          </span>
        </p>
       </div>
      </div>
  )
}