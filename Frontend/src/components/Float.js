import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
export default function FloatingActionButtons() {
        const [open, setOpen] = React.useState(false);
      
        const handleClick = () => {
          setOpen(true);
        };
      
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };

    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="error" aria-label="add">
            <WarningIcon onClick={handleClick}>
            </WarningIcon>
             <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
             <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              Report an emergency!
             </Alert>
           </Snackbar>
        </Fab>
        </Box>
  );
}