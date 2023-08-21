import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import '../OrderQueue/Leave.css';

const Leave = () => {
  const [selectedDate, setSelectedDate] = useState(localStorage.getItem('selectedDate') || '');
  const [selectedDateto, setSelectedDateto] = useState(localStorage.getItem('selectedDateto') || '');

  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);
    localStorage.setItem('selectedDate', dateValue);
  };

  const tohandleDateChange = (event) => {
    const dateValue = event.target.value;
    setSelectedDateto(dateValue);
    localStorage.setItem('selectedDateto', dateValue);
  };

  const handleRemove = () => {
    setSelectedDate('');
    setSelectedDateto('');
    localStorage.removeItem('selectedDate');
    localStorage.removeItem('selectedDateto');
  };

  useEffect(() => {
    // Load selected dates from localStorage on component mount
    const storedSelectedDate = localStorage.getItem('selectedDate');
    const storedSelectedDateto = localStorage.getItem('selectedDateto');
    if (storedSelectedDate) {
      setSelectedDate(storedSelectedDate);
    }
    if (storedSelectedDateto) {
      setSelectedDateto(storedSelectedDateto);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="main bg-tailtertiary h-screen m-0 p-0">
          <Navbar pagename={<h1>Delivery Agent Leave Page</h1>} screenname={<h2>DA000</h2>} />

          <h1 className='text-dark text-center mt-4 fw-bold fs-2'>Select Date for Leave</h1>

          <div className='leave'>
            <input
              type='date'
              className='text-center'
              value={selectedDate}
              onChange={handleDateChange}
            /><h1>To</h1>
             <input
              type='date'
              className='text-center'
              value={selectedDateto}
              onChange={tohandleDateChange}
            /><br /><br />
            <button className='btn btn-primary w-auto text-light'>
              Take Leave
            </button>
          </div>
          
          <div>
            <h1 className='text-danger mt-4 fw-bold fs-5'>Selected Date for Leave</h1><br></br>
            <h1>Date From: {selectedDate}</h1><br></br>
            <h1>Date to: {selectedDateto}</h1><br></br>
            <button className='btn btn-primary w-auto text-light' onClick={handleRemove}>
              Remove
            </button>  

              
            <button className='btn btn-primary w-auto ms-5 text-light'>
              Send to manager
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Leave;
