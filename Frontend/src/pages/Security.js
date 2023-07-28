import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import PersistentDrawerLeft from '../components/Drawer';
import BasicModel1 from '../components/Modal'
const images = [
  {
    url: 'https://m.media-amazon.com/images/I/41xRwlAjNhL.jpg',
    title: 'Door Alarm',
    width: '33.33%',
  },
  {
    url: 'https://t3.ftcdn.net/jpg/01/03/70/08/360_F_103700867_qECbSBRJ6OJl41DtcNyM9yYosFWXB4hs.jpg',
    title: 'Smoke Detectors',
    width: '33.33%',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    title: 'Camera',
    width: '33.33%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
    <>
    <PersistentDrawerLeft/>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
          <ImageButton
          focusRipple
          key={image.title}
          style={{
              width: image.width,
            }}
            >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
                >
              {image.title } 
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
                {/* onClick={<BasicModel1/>} */}
        </ImageButton>
      ))}
    </Box>
      </>
  );
}