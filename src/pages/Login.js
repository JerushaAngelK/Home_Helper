import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {KeyIcon} from '@fontawesome/react-fontawesome';
import InputAdornments from './LoginSection';
import InputWithIcon from './LoginSection2';
export default function Login(){
  return(
    <div className='first'>
      <h1 className='second'>Home Helper</h1>
      <div className='fourth'>
        <h3 className='fifth'>Login to your account</h3>
        <label className='signinl' HtmlFor="name">User Name:</label>
        <InputWithIcon/>
        {/* <input className='signini' type="text" id="name" name="name" placeholder="Enter your username.." required/> */}
        {/* <br></br> */}
        <label className='signinl' htmlFor="password" >Password:</label>
              <InputAdornments/>
        {/* <input className='signini' type="password" id="pwd" name="pwd" placeholder="Enter your password.." required />   */}
  
        <br></br>
        <Button variant="contained" endIcon={<LoginIcon />}>
        
          <Link to="/home" className='home'>Login</Link>
      </Button>
        {/* <button className='butsignin' type="button"><i class="fa-sharp fa-solid fa-right-to-bracket"></i> */}
            {/* Login */}
            {/* </Link> */}
            {/* </button> */}
      </div>
        <h4 className='signupl' text-color='white'>Don't have an account?
        {/* <Link to="/signup" className='signincli'> */}
        
          <Button variant='contained' color='success' endIcon={<AppRegistrationIcon />}>
        <Link to="/signup" className='register'>Sign Up </Link>
      </Button>
          {/* </Link> */}
          </h4>
    </div>
  )

}