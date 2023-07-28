import React, { useState } from 'react';
import './Noti.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './Api';
import { Link } from 'react-router-dom';
import axios from 'axios';
const FeedForm = () => {

const[formdata,setFormdata]= useState('')
const [report, setReport] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
    console.log(formdata);
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response=await axios.post(
        'http://localhost:8081/addfed',
        {
         report:report
       }
      );
      // await addFeedback(formdata);
      alert("Success!")
      navigate('/home')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }

  return (
    <div className="down">
      <div className="login-form">
        <h2>Report Your Issue</h2>
        <form onSubmit={handleSubmit} >
           
            <input
            type="text"
            placeholder="Your Issue"
            id='message'
            // onChange={handleChange}
            onChange={e => setReport(e.target.value)}
            required
            name={report}
            value={report}
          />
          <button type='submit' color='red'><Link to='/home'>Submit</Link></button>
          <div className="button">
         
          </div>
        </form>
      </div>
    </div>

  );
};

export default FeedForm;