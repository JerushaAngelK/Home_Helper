import React from 'react';
import PersistentDrawerLeft from '../components/Drawer';
import Iframe from 'react-iframe'
import { render } from '@testing-library/react';
import { Button } from '@mui/material';

export default function Inventory(){
            return(
        <div>
        <PersistentDrawerLeft/>
        {/* <iframe src="https://www.at-home.co.in/?gclid=CjwKCAjwwb6lBhBJEiwAbuVUSsOxr5ea8ZtzNXY0cOKciUd8GVLw_juh91LJdi6r3K0sdVp71VqnmhoC5P0QAvD_BwE"  */}
        {/* <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" 
        width={1000} height={500} 
        id=""
        className=""
        display="block"
        position="relative"
        loading='eager'
        sandbox=''></iframe> */}
        <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/cWDJoK8zw58'  width='900' height='500'  />"}} />
        <Button variant='contained'><a href='https://www.at-home.co.in/?gclid=CjwKCAjwwb6lBhBJEiwAbuVUSsOxr5ea8ZtzNXY0cOKciUd8GVLw_juh91LJdi6r3K0sdVp71VqnmhoC5P0QAvD_BwE'>Shop With Us</a></Button>
        </div>
    );
}
