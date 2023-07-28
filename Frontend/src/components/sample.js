import React,{ useState } from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import FormHelperText from '@mui/material/FormHelperText';
import { AccountCircle } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, IconButton } from '@mui/material';
import { FormGroup } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import '../pages/Login.css';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import  formData  from "axios"; 
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch } from 'react-redux';

export default function LoginF() {
   
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const user = { userName };
 const dispatch = useDispatch();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleSubmit = async (event) => {
    // console.log(formData);
    
    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', 
      { userName:userName,
        password:password }
      );
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      
      // Decode the token to get user information if needed
      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      dispatch({ type: "LOGIN", payload: user });
      alert("Succcess!");
      navigate("/home");
      
      // Redirect to the dashboard or any protected route
      // e.g., history.push('/dashboard');
      
    } catch (error) {
      console.error('Login failed:', error);
      alert("Invalid Credentials:"+error.message);
    }
  };

     
  return (
    <div className='firsts'>
     <form onSubmit={handleSubmit}>
     <div className='first'>
     <h1 className='second'>Home Helper</h1>
      <div className='fourth'>
        <h3 className='fifth'>Login to your account</h3>
      <FormGroup sx={{padding: 2, borderRadius: 2, border: '1px solid', borderColor: 'primary.main'}}>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" required>
    <label className='signinl' HtmlFor="name">Email:</label>
      <FilledInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end" > <EmailIcon /></InputAdornment>}
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
        </FormControl>
        </Box>
        </FormGroup>
        </div>
        <Button type="submit" endIcon={<LoginIcon />} variant="contained">
        Login
        </Button>
        <h4 className='signupl' text-color='white'>Don't have an account?
          </h4>
        <Link to="/signup" className='signincli'>
        
          <Button variant='contained' color='success' endIcon={<AppRegistrationIcon />}>
           Sign Up 
      </Button>
          </Link>
        </div>
        </form>
    </div>
  );
}