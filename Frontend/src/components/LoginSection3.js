import EmailIcon from '@mui/icons-material/Email';
import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import FormHelperText from '@mui/material/FormHelperText';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function InputWithIcons() {

  const navigate=useNavigate();
  const handleSubmit=(e)=>{
   e.preventDefault();
   navigate("/home");
  }
 

    return (
        <div>
          <form onSubmit={handleSubmit}>
             <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" type='email' required>
    <InputLabel htmlFor="outlined-adornment-email" type='email' required>Email</InputLabel>
      <FilledInput
        id="filled-adornment-email"
        endAdornment={<InputAdornment position="end"> <EmailIcon /></InputAdornment>}
        aria-describedby="filled-weight-helper-email"
        inputProps={{
            'aria-label': 'email',
        }}
        label="Username"
        required
        />
      <FormHelperText id="filled-weight-helper-email"></FormHelperText>
        {/* <TextField inputProps={{ inputMode: 'EMAIL', pattern: '[@]' }} /> */}
    </FormControl>
    </form>
    </div>
  );
}