// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar2 = () => {
//     return (
//             <nav className="navbar navbar-expand-lg navbar-dark bg-transparent gradient-custom">
//                 <div className="container-fluid">
                   
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <Link  to="/home" className="nav-link active" aria-current="page" href="#">DASHBOARD</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link  to="/att" className="nav-link active" aria-current="page" href="#">ATTENDENCE MANAGEMENT</Link>
//                             </li>
                            
//                             <li className="nav-item">
//                                 <Link to="/return" className="nav-link active" aria-current="page" href="#">HOME</Link>
//                             </li>

//                             <li className="nav-item">
//                                 <Link  to="/addProduct" className="nav-link active" aria-current="page" href="#">ADD DETAILS</Link>
//                             </li>

//                             <li className="nav-item">
//               <Link to="/login" className="nav-link">
//                 LogOut</Link>
              

//             </li>

//                         </ul>

//                     </div>
//                 </div>
//             </nav>
//     )
// }

// export default Navbar2;
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';
import { Button } from '@mui/material';
import PersistentDrawerLeft from '../components/Drawer';
const Navbar = () => {
    return (
        <div className="container-fluid">
                    <PersistentDrawerLeft/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                               <Button className='x'variant='contained' color='success' style={{float:"left",marginLeft:"10%"}}><Link to="/home">BACK</Link></Button> 
                            <Button className='y' variant='contained' color='info'style={{float:"right",marginRight:"10%"}}><Link  to="/addProduct">ADD</Link></Button>
                    </div>
                </div>
    )
}

export default Navbar;