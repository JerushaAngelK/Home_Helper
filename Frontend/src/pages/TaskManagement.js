// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import PersistentDrawerLeft from '../components/Drawer';
// import './All.css';
// import Tasks from '../assests/Task.jpg'
// import HoverRating from '../components/Rating';
// import ListEmployeeComponent from '../components/ListTask';
// import TaskService from '../services/TaskService';
// import ViewEmployeeComponent from '../components/ViewTask';
// import Homes from './View';
// export default function Task(){

//     const columns = [
//         { field: 'id', headerName: 'S.No', wsnoth: 50 },
//         { field: 'taskName', headerName: 'Task name', wsnoth: 220 },
//         { field: 'startDate', headerName: 'Start Date', wsnoth: 220 },
//         { field: 'endDate', headerName: 'End Date', wsnoth: 220 },
//         { field: 'status', headerName: 'Status', wsnoth: 220 },
//         {field: 'responser',headerName: 'Responser',type:'text',wsnoth: 220}
//         // {field:'rating',headerName: 'Review',type:'string',wsnoth:200}

//       ];
      
//       const rows = [
//         { id: 1, taskName: 'House Keeping', startDate: '01-01-2023', endDate:'01-02-2023',status:'Completed',responser: 'Mink'},
//         { id: 2, taskName: 'Plumbing ', startDate: '02-01-2023',  endDate:'02-02-2023',status:'Completed', responser: 'Lynn'},
//         { id: 3, taskName: 'Electronic Fix ', startDate: '03-01-2023', endDate:'03-02-2023',status:'Completed',responser: 'Lascrea' },
//         { id: 4, taskName: 'Carpentry', startDate: '04-01-2023', endDate:'04-02-2023',status:'Completed',responser: 'Jerusha' },
//         { id: 5, taskName: 'Lawn Works', startDate: '05-01-2023', endDate:'05-02-2023',status:'Aborted',responser: 'Angel' },
//         { id: 6, taskName: 'Custodian', startDate: '06-01-2023', endDate:'06-02-2023',status:'Completed',responser:'Anu'},
//         { id: 7, taskName: 'Nanny', startDate: '07-01-2023', endDate:'07-02-2023',status:'Completed',responser: 'Varshini' },
//         { id: 8, taskName: 'Decorator', startDate: '08-01-2023', endDate:'08-02-2023',status:'Completed',responser: 'Abinaya'},
//         { id: 9, taskName: 'Cook', startDate: '09-01-2023', endDate:'09-02-2023',status:'Completed',responser: 'Monky' },
//       ];
//     return(
//       <>
//       <PersistentDrawerLeft/>
//       <Homes/>
//           {/* <TaskService/> */}
//           {/* <ListEmployeeComponent/> */}
//           {/* <ViewEmployeeComponent /> */}
//           <div id="trail">
//             <img src={Tasks} alt="see" width={'1250'} height={'200'}></img>
//           </div>
//         <div style={{ height: 400, wsnoth: '100%',color:'15317E'}}>
//             <DataGrid backgroundColor='secondary' getDetailPanelContent={2}
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
            
//           },
//         }}
//         sx={{
//           boxShadow: 2,
//           border: 2,
//           backgroundColor: '15317E',
//           borderColor: 'primary.light',
//           '& .MuiDataGrid-cell:hover': {
//             color: 'primary.main',
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//         />
//         </div>
//         </>
//     )
// }


// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import PersistentDrawerLeft from '../components/Drawer';
// import './All.css';
// import Tasks from '../assests/Task.jpg';
// import { TextField, Button } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function Task() {
//   const [taskName, setTaskName] = React.useState('');
//   const [startDate, setStartDate] = React.useState('');
//   const [endDate, setEndDate] = React.useState('');
//   const [status, setStatus] = React.useState('');
//   const [responser, setResponser] = React.useState('');
//   const navigate=useNavigate();

//   const handleSubmit = async(event) => {
//     // Here, you can handle adding the task to your data or API
//     // For simplicity, we'll just add the task to the rows array
//     const newTask = {
//       id: rows.length + 1,
//       taskName: taskName,
//       startDate: startDate,
//       endDate: endDate,
//       status: status,
//       responser: responser,
//     };
//     setRows((prevRows) => [...prevRows, newTask]);

//     event.preventDefault();
//     // Clear the input fields after adding the task
//     setTaskName('');
//     setStartDate('');
//     setEndDate('');
//     setStatus('');
//     setResponser('');
//     // const handleSubmit = async (event) => {
//        // console.log(formData);
       
       
//        try{
//         const response=await axios.post(
//        'http://localhost:8082/saveProduct',
//        {
//         taskName: taskName,
//         startDate: startDate,
//         endDate: endDate,
//         status: status,
//         responser: responser,
//       }
//         );
//        navigate("/home");
//         alert("Signed up a new account successfully.Please Login");}
//        catch(error){
//        alert(error.message);
//         }
//        };
//   // };

//   const columns = [
//     { field: 'id', headerName: 'S.No', width: 50 },
//     { field: 'taskName', headerName: 'Task name', width: 220 },
//     { field: 'startDate', headerName: 'Start Date', width: 220 },
//     { field: 'endDate', headerName: 'End Date', width: 220 },
//     { field: 'status', headerName: 'Status', width: 220 },
//     { field: 'responser', headerName: 'Responser', width: 220 },
//   ];

//   const [rows, setRows] = React.useState([
//     { id: 1, taskName: 'House Keeping', startDate: '01-01-2023', endDate: '01-02-2023', status: 'Completed', responser: 'Mink' },
//     { id:rows.length+1,
//       taskName: taskName,
//       startDate: startDate,
//       endDate: endDate,
//       status: "Completed",
//       responser: responser,}
//     // Add other existing rows here
//   ]);
//   return (
//     <>
//       <PersistentDrawerLeft />
//       <div id="trail">
//         <img src={Tasks} alt="see" width={'1250'} height={'200'}></img>
//       </div>
//         <form onSubmit={handleSubmit}>
//       <div style={{ padding: '1rem' }}>
//         <TextField
//           label="Task Name"
//           value={taskName}
//           onChange={(e) => setTaskName(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Start Date"
//           type="date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="End Date"
//           type="date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Status"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Responser"
//           value={responser}
//           onChange={(e) => setResponser(e.target.value)}
//           fullWidth
//           margin="normal"
//         />
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Add Task
//         </Button>
//       </div>
//       </form>
//       <div style={{ height: 400, width: '100%', color: '15317E' }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           checkboxSelection
//           disableSelectionOnClick
//         />
//       </div>
//     </>
//   );
// }
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PersistentDrawerLeft from '../components/Drawer';
import './All.css';
import Tasks from '../assests/Task.jpg';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

export default function Task() {
  const [taskName, setTaskName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');
  const [responder, setResponder] = useState('');
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8082/'); // Replace 'http://localhost:8082/' with your API endpoint for fetching tasks
      setRows(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTask = async () => {
    try {
      // Code to add task to the database
      await axios.post('http://localhost:8082/saveProduct', {
        taskName: taskName,
        startDate: startDate,
        endDate: endDate,
        status: status,
        responder: responder,
      }); // Replace 'http://localhost:8082/saveProduct' with your API endpoint for saving tasks

      // Clear the input fields after adding a new task
      setTaskName('');
      setStartDate('');
      setEndDate('');
      setStatus('');
      setResponder('');

      // Fetch data again after adding a new task
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'S.No', width: 50 },
    { field: 'taskName', headerName: 'Task name', width: 200 },
    { field: 'startDate', headerName: 'Start Date', width: 200 },
    { field: 'endDate', headerName: 'End Date', width: 200 },
    { field: 'status', headerName: 'Status', width: 200 },
    { field: 'responder', headerName: 'Responder', width: 200 },
  ];
  return (
    <div style={{backgroundColor:'lightGrey'}}>
      <PersistentDrawerLeft />
      <div id="trail" >
        <img src={Tasks} alt="see" width={'1250'} height={'200'}></img>
      </div>
      <form>
              <div style={{ padding: '1rem', height: 400, width: '60%', margin:'5%',color: '15317E' ,boxShadow: 2,
          border: 2,
          backgroundColor: '15317E',
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },}}>
        {/* Input fields for task details */}
        {/* <label>Task Name</label> */}
        <TextField
          label="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            placeholder: '',
          }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          fullWidth
          margin="normal"
          required
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            placeholder: '',
          }}
        />
        <TextField
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Responser"
          value={responder}
          onChange={(e) => setResponder(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
      </div>
        </form>
        <div style={{float:'right',marginTop:'-22%',marginRight:'15%'}}>
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
        </div>
      <div style={{ height: 400, width: '90%', margin:'5%',marginBottom:'0%',color: '15317E' }}>
        {/* DataGrid to display the fetched tasks */}
        {/* <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        /> */}
         <DataGrid backgroundColor='secondary' getDetailPanelContent={2}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
            
          },
        }}
        sx={{
          boxShadow: 2,
          border: 2,
          backgroundColor: '15317E',
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        />
      </div>
    </div>
  );
}

