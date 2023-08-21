import React, { useState } from "react";
import "./ChangeSlot.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const ChangeSlot = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle slot update logic
  };

  return (
    <div className="container">
      <div className="main bg-tailtertiary h-screen m-0 p-0">
        <Navbar pagename={<h1>Change Slot</h1>} screenname={<h2>DA106</h2>} />
        <div className="change-slot-body">
          <form className="change-slot-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                placeholder="Enter new date"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time:</label>
              <input
                type="text"
                id="time"
                value={time}
                onChange={handleTimeChange}
                placeholder="Enter new time"
                required
              />
            </div>
            <button type="submit" className="update-button">
              Update Slot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangeSlot;
