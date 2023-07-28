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

  // const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  //  const user = {email,};
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);

  //   const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //   };
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('Email:', email);
  //     console.log('Password:', password);
  //     alert("Successfully Logged in with " + email);
  //     dispatch(
  //       {type: "LOGIN",payload:user}
  //     );
  //     setEmail('');
  //     setPassword('');
  //     // navigate("/home");
  //   };

  return (
    <div>
     {/* <form onSubmit={handleSubmit}> */}

    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled" required>
    <InputLabel htmlFor="outlined-adornment-password" required>Username</InputLabel>
      <FilledInput
        id="filled-adornment-weight"
        endAdornment={<InputAdornment position="end" > <AccountCircle /></InputAdornment>}
        aria-describedby="filled-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        label="Username"
        required
        />
      <FormHelperText id="filled-weight-helper-text"></FormHelperText>
    </FormControl>
        {/* </form> */}
    </div>
  );
}