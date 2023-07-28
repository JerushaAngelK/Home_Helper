import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import PersistentDrawerLeft from '../components/Drawer';
import SelectAllTransferList from '../components/TransferList';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Opacity } from '@mui/icons-material';
import './All.css';
export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const style = {
    width: '100%',
    maxWidth: '80%',
    bgcolor: 'background.paper',
  };



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  return (
    <div id='main'>
      <h1>Maintainence & Repair Records</h1>
    <List sx={{ width: '100%', maxWidth: '80', bgcolor: 'backgroud.paper' ,Opacity:'40%' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        
        return (
          <div>

            <PersistentDrawerLeft/>
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon onClick={handleClickOpen}/>
              </IconButton>
            }
            disablePadding
            sx={style} 
            >
            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Week ${value + 1}`} />
            </ListItemButton>
          <SelectAllTransferList/>
          </ListItem>
          <br></br>
          <Divider/>
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Add a review of our services for the week.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Drop your thoughts here"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Post</Button>
        </DialogActions>
      </Dialog>
      </div>
        );
      })}
    </List>
    </div>
  );
}