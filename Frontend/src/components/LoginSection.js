import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

export default function InputAdornments() {

  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  const navigate=useNavigate();
  const handleSubmit=(e)=>{
   e.preventDefault();
   navigate("/home");
  }
 


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" required>
          <InputLabel htmlFor="outlined-adornment-password"  required
          sx={{ mb: 1, fontSize: 'var(--joy-fontSize-sm)' }} >Password</InputLabel>
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
            label="Password"
            required
          />
        </FormControl>
      </form>
      </div>
    </Box>
  );
}