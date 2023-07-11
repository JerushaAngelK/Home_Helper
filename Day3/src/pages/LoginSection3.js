import EmailIcon from '@mui/icons-material/Email';import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import FormHelperText from '@mui/material/FormHelperText';
import { AccountCircle } from '@mui/icons-material';

export default function InputWithIcons() {

    return (
        <div>
             <FormControl sx={{ m: 2, width: '30ch' }} variant="filled">
    <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
      <FilledInput
        id="filled-adornment-weight"
        endAdornment={<InputAdornment position="end"> <EmailIcon /></InputAdornment>}
        aria-describedby="filled-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        label="Username"
        />
      <FormHelperText id="filled-weight-helper-text"></FormHelperText>
    </FormControl>
    </div>
  );
}