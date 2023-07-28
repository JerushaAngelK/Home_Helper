// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import productService from "./Service";
// import Navbar2 from "./Nav";
// // import productService 

// const Homes = () => {
//   const [productList, setProductList] = useState([]);
//   const [msg, setMsg] = useState("");

//   useEffect(() => {
//     init();
//   }, []);

//   const init = () => {
//     productService
//       .getAllProduct()
//       .then((res) => {
//         setProductList(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const deleteProduct = (id) => {
//     productService
//       .deleteProduct(id)
//       .then((res) => {
//         setMsg("Deleted Successfully");
//         init();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="container mt-3">
//         <Navbar2/>
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-header fs-3 text-center">
//               <h1>Task Management</h1>
//               <br />
//               {msg && <p className="fs-4 text-center text-success">{msg}</p>}
//             </div>

//             <div className="card-body">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Task Name</th>
//                     <th scope="col">Start Date</th>
//                     <th scope="col">End Date</th>
//                     <th scope="col">Responder</th>
//                     <th scope="col">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {productList.map((p, index) => (
//                     <tr key={p.id}>
//                       <td>{index + 1}</td>
//                       <td>{p.taskName}</td>
//                       <td>{p.startDate}</td>
//                       <td>{p.endDate}</td>
//                       <td>{p.responder}</td>
//                       <td>
//                         <button  className="btn btn-sm btn-danger ms-1">
//                         <Link to={`/editProduct/${p.id}`} >
//                           UPDATE
//                         </Link>
//                         </button>
//                         <br />
//                         <button
//                           onClick={() => deleteProduct(p.id)}
//                           className="btn btn-sm btn-danger ms-1"
//                         >
//                           DELETE
//                         </button>
                        
//                         <Link  to="/addProduct" className="nav-link active" aria-current="page" href="#">ADD DETAILS</Link>

//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Homes;
import Navbar from "./Nav";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "./Service";
import './View.css';
import { Button } from "@mui/material";

const Homes = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);

  const init = () => {
    ProductService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    ProductService
      .deleteProduct(id)
      .then((res) => {
        setMsg(" Deleted Successfully");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container mt-3" style={{backgroundImage:" url('https://images.pexels.com/photos/8031909/pexels-photo-8031909.jpeg?cs=srgb&dl=pexels-curtis-adams-8031909.jpg&fm=jpg')"}}>
          <Navbar/>
        <div className="row" >  
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                <h1>
               Inventory
               </h1>
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Object NAME</th>
                      <th scope="col">COUNT</th>
                      {/* <th scope="col">ACTION</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.objectName}</td>
                        <td>{p.count}</td>
                      
                        <td>
                          {/* <Button><Link to='/editProduct' className="btn btn-dark">
                            EDIT
                          </Link>
                          </Button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-sm btn-danger ms-1">
                            DELETE
                          </button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Button variant='contained'><a href='https://www.at-home.co.in/?gclid=CjwKCAjwwb6lBhBJEiwAbuVUSsOxr5ea8ZtzNXY0cOKciUd8GVLw_juh91LJdi6r3K0sdVp71VqnmhoC5P0QAvD_BwE'>Shop With Us</a></Button>
      </div>
  );
};

export default Homes;