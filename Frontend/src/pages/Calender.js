import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PersistentDrawerLeft from '../components/Drawer';
import './All.css';
import axios from 'axios';
export default function CustomMonthLayout() {
  const saveDateToDB = async (chosenDate) => {
    try {
      await axios.post('http://localhost:8082/api/plans/post', 
      { date: chosenDate });
      console.log('Date saved to database!');
    } catch (error) {
      console.log('Error saving date to database:', error);
    }
  };
  
  const handleDateSelect = (chosenDate) => {
    // Call the function to save the date to the database
    saveDateToDB(chosenDate);
  };

  return (
    <>

      <PersistentDrawerLeft/>
    <div id="cal">
    <h2>Schedule Your Plans</h2>
 <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} onDateChange={handleDateSelect} />
    </LocalizationProvider>
    </div>
    <div>
        <p><h2>"The backbone of success is hard work, determination, good planning, and perseverance." </h2> 
        <img src="https://w0.peakpx.com/wallpaper/194/924/HD-wallpaper-stay-focused-10-focused-forest-motivation-nature-graphy-quote-saying-sky-stay-trees.jpg" alt="see" width={'390'} height={'330'}></img>
</p>
    </div>
    </>
  );
}
// import React, { useState } from 'react';
// import { DatePicker } from '@mui/lab';
// import { Button } from '@mui/material';
// import PersistentDrawerLeft from '../components/Drawer';
// // import './Calendar.css';
// import axios from 'axios';

// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [msg, setMsg] = useState('');

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//   };

//   const saveDateToDB = async () => {
//     try {
//       if (!selectedDate) return;
//       await axios.post('https:localhost:8082/api/plans', { date: selectedDate.toISOString() });
//       setMsg('Date saved to database!');
//     } catch (error) {
//       setMsg('Error saving date to database.');
//     }
//   };

//   return (
//     <>
//       <PersistentDrawerLeft />
//       <div className="container mt-3">
//         <div className="row">
//           <div className="col-md-6 offset-md-3">
//             <div className="card">
//               <div className="card-header fs-3 text-center">Schedule Your Plans</div>
//               {msg && <p className="fs-4 text-center text-success">{msg}</p>}

//               <div className="card-body">
//                 <div className="calendar-container">
//                   <DatePicker
//                     label="Select Date"
//                     value={selectedDate}
//                     onChange={handleDateSelect}
//                     renderInput={(params) => <input {...params} className="form-control" />}
//                   />
//                 </div>
//                 <Button className="btn btn-primary col-md-12 mt-3" onClick={saveDateToDB}>
//                   Save Date to Database
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Calendar;
