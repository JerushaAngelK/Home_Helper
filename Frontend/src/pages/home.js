import * as React from 'react';
import PersistentDrawerLeft from '../components/Drawer';
import './home.css'
import { Typography, Container, Box, List, ListItem, ListItemText } from '@material-ui/core';
import MediaCard from '../components/Card1';
import MediaCard1 from '../components/Card2';
import MediaCard3 from '../components/Card4';
import MediaCard2 from '../components/Card3';
import Slide from '../components/Slider'
import MediaCard4 from '../components/Card5';
import MediaCard5 from '../components/Card6';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import { Root } from 'react-dom/client';
import Switch from "@material-ui/core/Switch";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MediaCard6 from '../components/Card7';
import MediaCard7 from '../components/Card8';
import FloatingActionButtons from '../components/Float';
import Forms from './Contact';
import Footer from './Contact';

export default function Home(){


    return(
       
        <div className='seey'>
        <PersistentDrawerLeft style={{backgroundColor:"#A67B5B"}}/>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
            <div id="head">
            Welcome to Home Helper
            </div>
            <div>
                <Slide/>
            </div>
        </Typography>

        <div id="one"> 

        <div id="yes">
        <MediaCard/>
        </div>
        <div id="no">
        <MediaCard1/>
        </div>
        <div id="yes1">
        <MediaCard2/>
        </div>
        <div id="no1">
        <MediaCard3/>
        </div>
        </div>
        <Divider/>
        {/* <span></span> */}
        <div id="twos">
            <div id="yes2">
                <MediaCard4/>
            </div>
            <div id="no2">
                <MediaCard5/>
            </div>
            <div id="yes3">
                <MediaCard6/>
            </div>
            <div id="no3">
                <MediaCard7/>
            </div>
        </div>
<div id="bot">
    <FloatingActionButtons/>
</div>
    <Footer/>
{/* <Forms/> */}
        </div>


    )
}