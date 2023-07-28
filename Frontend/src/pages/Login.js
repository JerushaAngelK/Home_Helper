import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {KeyIcon} from '@fontawesome/react-fontawesome';
import InputAdornments from '../components/LoginSection';
import InputWithIcon from '../components/LoginSection2';
import { useNavigate } from 'react-router-dom';
import { FormGroup } from '@material-ui/core';


export default function Login(){


  const navigate=useNavigate();
 const handleSubmit=(e)=>{
  e.preventDefault();
  navigate("/home");
 }

  
//  const handleSubmit = (event) => {
//   event.preventDefault();
//       navigate("/home");
// }

  return(
    <div className='firsts'>
  <form onSubmit={handleSubmit}>
    <div className='first'>
  {/* <form onSubmit={handleSubmit}> */}
      <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: 'primary.main'}}>
      <h1 className='second'>Home Helper</h1>
      <div className='fourth'>
        <h3 className='fifth'>Login to your account</h3>
        <label className='signinl' HtmlFor="name">User Name:</label>
        <InputWithIcon/>
        <label className='signinl' htmlFor="password" >Password:</label>
              <InputAdornments/>
        <br></br>
        <Button variant="contained" endIcon={<LoginIcon />}>
        
          <Link to="/home" className='home'>Login</Link>
      </Button>
      </div>
        <h4 className='signupl' text-color='white'>Don't have an account?
          </h4>
        <Link to="/signup" className='signincli'>
        
          <Button variant='contained' color='success' endIcon={<AppRegistrationIcon />}>
           Sign Up 
      </Button>
          </Link>
          </FormGroup>
    </div>
        </form>
    </div>
  )

}