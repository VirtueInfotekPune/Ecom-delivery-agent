import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import { FaUser, FaCog, FaGlobe, FaMoon, FaSignOutAlt } from "react-icons/fa";
import "./Profile.css";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="container">
      <div className="main bg-tailtertiary h-screen m-0 p-0">
        <Navbar pagename={<h1>Agent Profile</h1>} screenname={<h2>DA101</h2>}/>

        <div className="profile-card">
          <div className="profile-info">
            <div className="profile-image">
              <FaUser size={80} />
            </div>
            <h2 className="profile-name">Delivery demo</h2>
          </div>
          <div className="profile-options">
            <Link to="/profile/updateprofile" className="profile-option">
              <span>
                <FaCog />
              </span>
              <span>Update Profile</span>
            </Link>
            <Link to="/language" className="profile-option">
            <span>
                <FaGlobe />
              </span>
              <span>Languages</span>
            </Link>
            <Link to="/darkmode" className="profile-option">
            <span>
                <FaMoon />
              </span>
              <span>Dark Theme</span>
            </Link>
            <Link to="/logout" className="profile-option">
            <span>
                <FaSignOutAlt />
              </span>
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
