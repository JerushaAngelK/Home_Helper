import React,{ useState }  from "react";
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
import EmailIcon from '@mui/icons-material/Email';
import FilledInput from '@mui/material/FilledInput';
import { AccountCircle } from '@mui/icons-material';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {IconButton } from '@mui/material';
import { FormGroup } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import '../pages/Login.css';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';
import  formData  from "axios"; 

export default function Register(){

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});


  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
  }


  const handleSubmit = async (event) => {
   event.preventDefault();
    // console.log(formData);
    try{
     const response=await axios.post(
    'http://localhost:8080/api/v1/auth/register',
    {
     userName:userName,
     password:password,
     email:email,
     userType:userType
   }
     );
    navigate("/Login");
     alert("Signed up a new account successfully.Please Login");}
    catch(error){
    alert(error.message);
     }
    };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 

    return(
        <div className='two'>
         <form onSubmit={handleSubmit}>
        <div className='first'>
        <h1 className='second' style={{fontSize:38}}>Home Helper</h1>
          <h3 className='fifth'>Join Us</h3>
<FormGroup sx={{padding: 1, borderRadius: 1, border: '1px solid', borderColor: 'primary.main'}}>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" required>
    <label className='signinl' HtmlFor="name">User Name:</label>
      <FilledInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end" > <AccountCircle /></InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        onChange={e => setUserName(e.target.value)}

        required
        label="Username"
        name={userName}
        value={userName}
        />
        {errors.userName && touched.userName?<p>
          {errors.userName}
        </p>:null}
      <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
      </FormControl>
    
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" required>
        <label className='signinl' htmlFor="password" >Password:</label>
          <FilledInput
          
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={e => setPassword(e.target.value)}

            label="Password"
            required
            name={password}
            value={password}
          />
{errors.password && touched.password?<p>
          {errors.password}
        </p>:null}
        </FormControl>
    </Box>
<FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" type='email'>
<label className='signinl' htmlFor="email" label="User Identity">Email:</label>
      <FilledInput
        id="outlined-adornment-email"
        type="email"
        endAdornment={<InputAdornment position="end"> <EmailIcon /></InputAdornment>}
        aria-describedby="outlined-weight-helper-email"
        inputProps={{
            'aria-label': 'email',
        }}
        onChange={e => setEmail(e.target.value)}

        label="Email"
        required
        name={email}
        value={email}
        />
        {errors.email && touched.email?<p>
          {errors.email}
        </p>:null}
      <FormHelperText id="outlined-weight-helper-email"></FormHelperText>
    </FormControl>
        </FormGroup> 
     <label className='signinl' htmlFor="text" >Worker/Owner:</label>
     <br/>
      <TextField required id="outlined-basic" label="" variant="outlined"sx={{scale:"1"}} 
      onChange={e => setUserType(e.target.value)}
      name={userType}
      value={userType}
/>
{errors.userType && touched.userType?<p>
          {errors.userType}
        </p>:null}
      <FormHelperText id="outlined-weight-helper-text"></FormHelperText>
    <br/>
        <Button type="submit" onChange={handleChange} variant="contained" endIcon={<LoginIcon />}>
          Register
          {/* <Link to="/Login" className='login'>Register</Link> */}
      </Button>
    </div>
    </form>
      </div>
)
}