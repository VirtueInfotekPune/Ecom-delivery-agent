import React from "react";
import "./UpdateProfile.css";
import Navbar from "../components/Navbar";

const UpdateProfile = () => {
  return (
    <div className="container">
      <div className="main bg-tailtertiary h-screen m-0 p-0">
        <Navbar pagename={<h1>Agent Update Profile</h1>} screenname={<h2>DA102</h2>} />
        <div className="profile-card">
          <div className="update-profile-image">
            <img
              src="https://imgs.search.brave.com/Ri4RX3-HqrKFuMq7XlrFwluxrMWClwcB57G2krp-to8/rs:fit:860:609:1/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8zNS0z/NTA0MjZfcHJvZmls/ZS1pY29uLXBuZy1k/ZWZhdWx0LXByb2Zp/bGUtcGljdHVyZS1w/bmctdHJhbnNwYXJl/bnQucG5n"
              alt="profile"
            />
          </div>
          <div className="update-profile-form">
            <h2>Update Profile</h2>
            <form>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" />
              </div>
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
