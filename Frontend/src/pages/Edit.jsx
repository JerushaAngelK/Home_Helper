// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import productService from "../service/product.service";

// const EditProduct = () => {
//   const [product, setProduct] = useState({
//     id: "",
//     taskName: "",
//     startDate: "",
//    endDate: "",
//    responder:""
   
//   });

//   const navigate = useNavigate();

//   const { id } = useParams();
//   console.log(id);

//   const [msg, setMsg] = useState("");

//   useEffect(() => {
//     productService
//       .getProductById(id)
//       .then((res) => {
//         setProduct(res.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setProduct({ ...product, [e.target.name]: value });
//   };

//   const ProductUpdate = (e) => {
//     e.preventDefault();

//     productService
//       .editProduct(product)
//       .then((res) => {
//         navigate("/return");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//       <div className="container mt-3">
//         <div className="row">
//           <div className="col-md-6 offset-md-3">
//             <div className="card">
//               <div className="card-header fs-3 text-center">UPDATE</div>
//               {msg && <p className="fs-4 text-center text-success">{msg}</p>}

//               <div className="card-body">
//                 <form onSubmit={(e) => ProductUpdate(e)}>
//                   <div className="mb-3">
//                     <label>Id</label>
//                     <input
//                       type="numbers"
//                       name="id"
//                       className="form-control"
//                       onChange={(e) => handleChange(e)}
//                       value={product.id}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>Task Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-control"
//                       onChange={(e) => handleChange(e)}
//                       value={product.taskName}
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label>Start Date</label>
//                     <input
//                       type="text"
//                       name="feesstatus"
//                       className="form-control"
//                       onChange={(e) => handleChange(e)}
//                       value={product.startDate}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label>End Date</label>
//                     <input
//                       type="NUMBER"
//                       name="feespaid"
//                       className="form-control"
//                       onChange={(e) => handleChange(e)}
//                       value={product.endDate}
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label>Responder</label>
//                     <input
//                       type="NUMBER"
//                       name="remaining_fees_to_be_paid"
//                       className="form-control"
//                       onChange={(e) => handleChange(e)}
//                       value={product.responder}
//                     />
//                   </div>
//                   <button className="glow-hover">Update</button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default EditProduct;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductService from "./Service";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: 0,
    objectName: "",
    count: 0
   
  });

  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  const [msg, setMsg] = useState("");

  useEffect(() => {
    ProductService
      .getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();

    ProductService
      .editProduct(product)
      .then((res) => {
        navigate("/invent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Edit Inventory</div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => ProductUpdate(e)}>
                  <div className="mb-3">
                    <label>Object Name</label>
                    <input
                      type="text"
                      name="objectName"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.objectName}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Count</label>
                    <input
                      type="number"
                      name="count"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.count}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EditProduct;