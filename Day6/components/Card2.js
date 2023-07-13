import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard1() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://cdn.pixabay.com/photo/2014/08/08/21/38/mixer-tap-413745_1280.jpg"
        title="Plumbing"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Plumbing
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Offering homeowners a convenient way to simplify the process of scheduling appointments, provides access to qualified plumbers.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}