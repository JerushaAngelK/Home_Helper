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
export default function InputWithIcon() {

  return (
    // <Box sx={{  display: 'flex', flexWrap: 'wrap' }}>
    //     <div>
    //     <FormControl sx={{ m: 2, width: '30ch' }} variant="outlined">
    //     <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
    //   <TextField
    //     id="input-with-icon-textfield"
    //     label=""
    //     InputProps={{
    //         startAdornment: (
    //             <InputAdornment position="end">
    //           <AccountCircle />
    //         </InputAdornment>
    //       ),
    //     }}
    //     variant="standard"
    //   />
    // </FormControl>
    //     </div>
    // </Box>
    <div>
    {/* <TextField
      label="With normal TextField"
      id="filled-start-adornment"
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
      }}
      variant="filled"
    /> */}
    <FormControl sx={{ m: 2, width: '30ch' }} variant="filled">
    <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
      <FilledInput
        id="filled-adornment-weight"
        endAdornment={<InputAdornment position="end"> <AccountCircle /></InputAdornment>}
        aria-describedby="filled-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        // label="Username"
        />
      <FormHelperText id="filled-weight-helper-text"></FormHelperText>
    </FormControl>
    </div>
  );
}