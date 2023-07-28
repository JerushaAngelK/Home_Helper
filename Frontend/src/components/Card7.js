import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard6() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
        title="Cooking"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cooking
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Connects users with skilled cooks who can prepare delicious and customized meals according to their preferences and dietary needs.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}