import React from "react";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import InputAdornments from '../components/LoginSection';
import InputWithIcon from '../components/LoginSection2';
import InputLabel from '@mui/material/InputLabel';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputWithIcons from "../components/LoginSection3";
import FormControl from '@mui/material/FormControl';
import FormHelperText  from "@mui/material/FormHelperText";
import './signup.css';
export default function Register(){
    return(
        <div className='two'>

          {/* <div className="signupa"> */}
        <div className='first'>
        <h1 className='second'>Home Helper</h1>
        {/* <div className='fourth'> */}
          <h3 className='fifth'>Join Us</h3>
          <label className='signinl' HtmlFor="name" sx={{scale:"0.9"}}>Full Name:<InputWithIcon/></label>
          
        <label className='signinl' htmlFor="email" >Email:<InputWithIcons/></label>
        
          <label className='signinl' htmlFor="password">Password:<InputAdornments/></label>
              
              {/* <br></br> */}
              {/* </div> */}
              {/* <label className="signupl" htmlFor="email">E-mail:</label>
                    <input className="signupe" type="email" id="email" name="email" placeholder="Enter your e-mail.."/> */}
                    {/* <div className="signupb"> */}

        {/* <Box */}
    {/* //   component="form"
    //   sx={{ */}
    {/* //       '& > :not(style)': { m: 1, width: '25ch' },
    //     }}
    //     noValidate
    //     autoComplete="off"
//     > */}
    {/* <FormControl sx={{ m: 2, width: '30ch' }} variant="filled"> */}

     {/* <InputLabel htmlFor="outlined-adornment-password">Address</InputLabel> */}
{/* <label className='signinl' htmlFor="text" >Address:</label><br/>
      <TextField id="filled-basic" label="Address" variant="filled" sx={{scale:"1"}}/> */}
      {/* <br></br> */}
     {/* <InputLabel htmlFor="outlined-adornment-password"></InputLabel> */}
     <label className='signinl' htmlFor="text" >Worker/Owner:</label><br/>
     {/* <br/> */}
      <TextField id="filled-basic" label="User Identity" variant="filled"sx={{scale:"1"}} />
      <br></br>
      {/* <label className='signinl' htmlFor="password" >:</label>
      <TextField id="standard-basic" label="" variant="filled" /> */}
      <FormHelperText id="filled-weight-helper-text"></FormHelperText>
        {/* </FormControl> */}
    {/* </Box> */}
    <br/>
        <Button variant="contained" endIcon={<LoginIcon />}>
          <Link to="/Login" className='login'>Register</Link>
      </Button>
        {/* </div> */}
      {/* </div> */}
    </div>
      </div>
)
}