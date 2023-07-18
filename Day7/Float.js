import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import WarningIcon from '@mui/icons-material/Warning';
import { Link } from 'react-router-dom';


export default function FloatingActionButtons() {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="add">
          <Link to='/float'><WarningIcon /></Link>
        </Fab>
        </Box>
  );
}