import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard2() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.pixabay.com/photo/2019/05/12/15/07/electric-4198293_640.jpg"
        title="Electrical Works"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Electrical Works
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Provides users with easy access to professional electricians who can handle electrical tasks,including installations and troubleshooting.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}