import React from 'react';
import BasicArea from '../components/Graph';
import PersistentDrawerLeft from '../components/Drawer';
import HoverRating from '../components/Rating';

export default function Energy(){
    return(
        <div>
             <PersistentDrawerLeft/>
            <BasicArea/>
            <HoverRating/> 
        </div>
    )
}