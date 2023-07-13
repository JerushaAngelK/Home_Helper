import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard3() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://c0.wallpaperflare.com/preview/603/12/903/person-indoor-clean-cleaning.jpg"
        title="Cleaning"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cleaning
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Offers convenient, one-tap access to comprehensive cleaning services, including dusting, vacuuming, and mopping.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comment</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}