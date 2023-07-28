import PersistentDrawerLeft from '../components/Drawer';
import PieArcLabel from '../components/PieChart';
import HorizontalNonLinearStepper from '../components/Progress';
import * as React from 'react';

export default function Budget(){
    return(
        <div>
             <PersistentDrawerLeft/>
            <HorizontalNonLinearStepper/>
            <PieArcLabel/>
        </div>
    )
}