import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard5() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://plus.unsplash.com/premium_photo-1679398790597-a4bcaaac1c2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyZSUyMGdpdmVyfGVufDB8fDB8fHww&w=1000&q=80"
        title="Care Taking"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Care Taking
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Reliable and efficient caretaking services, offering users the access to caregivers for tasks such as elderly assistance, child care, pet care and more.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}