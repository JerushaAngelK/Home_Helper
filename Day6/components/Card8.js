import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard7() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c4.wallpaperflare.com/wallpaper/487/815/663/decoration-toys-tree-new-year-wallpaper-preview.jpg"
        title="Decoring"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Decoring
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Access to professional decor services, connecting users with skilled decorators who can transform their living spaces into stylish and personalized environments. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}