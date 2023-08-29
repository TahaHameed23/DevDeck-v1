import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI'
import GoogleButton from 'react-google-button'
import { LoadingButton } from '@mui/lab'
import '../styles/Login.scss'
import logo from '../assets/logo.png'
import background from '../assets/dddepth-346.jpg'
export default function Logincompo() {
  let navigate = useNavigate();
  const [credentails, setCredentials ]= useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = React.useState(false);
  
  const login = async () => {
    try{
      setLoading(true);
      let res = await LoginAPI(credentails.email, credentails.password);
      // setLoading(false);
      localStorage.setItem('userEmail', res.user.email);
      navigate('/home');
      // setError('')
    }
    catch(error){
      setLoading(false);
      setError('Wrong email or password, please try again.');
    }

  };
  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
  }
  
  return (
    <div style={{background:`url(${background})`,backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="login-wrapper bg-[url(./src/assets/dddepth-346.jpg)] bg-no-repeat bg-cover">
      <div className="header flex justify-center items-center gap-4">
      <img src={logo} className="w-10 h-8" />
      <span className='brand mt-1'>DevDeck</span>
      </div>
      <div className="login-wrapper-inner">
        <h1 className="heading">Log In</h1>
        <p className="sub-heading">Community of :<span>D</span> Devs</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        {error && <p className="error text-white " style={{marginTop:0+'rem'}}>{error}</p>}
        <LoadingButton
          className='login-btn'
          size="small"
          onClick={login}
          loading={loading}
          loadingPosition="end"
          endIcon=""
          variant="contained"
          style={{borderRadius:14}}
        >
          <span>Log in</span>
        </LoadingButton>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
      <GoogleButton 
        className='google-btn'
        style={{borderRadius:5}}
        onClick={googleSignIn}
      />
        <p className="go-to-signup text-slate-100 ">
          New to DevDeck?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
       </div>
      </div>
  )
}

