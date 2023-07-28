import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <div>

    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://w0.peakpx.com/wallpaper/101/754/HD-wallpaper-house-on-a-hill-luxury-house-pretty-house-beautiful-house.jpg"
        title="Lawn Mowing"
        // bac: '#E1CEBF'
        
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Lawn Mowing
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Homeowners can now enjoy the convenience of outsourcing their lawn mowing tasks to professionals or experienced individuals
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </div>
  );
}