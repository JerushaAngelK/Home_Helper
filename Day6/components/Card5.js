import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard4() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c4.wallpaperflare.com/wallpaper/641/135/716/adult-blur-carpenter-carpentry-wallpaper-preview.jpg"
        title="Mending"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mending
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Efficiently manages and assigns mending tasks, ensuring that users can easily request and receive assistance with repairs, fixes, and other household tasks.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}