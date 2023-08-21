import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MyNavitem from "./MyNavitem";
import { VscPreview } from "react-icons/vsc";
import { Outlet } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };



  const handleSectionClick = () => {
    if (window.innerWidth <= 768) {
      setShowSidebar(false);
    }
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`container2 ${showSidebar ? "show-sidebar" : ""}`}>
        <div className="profile">
          <div className="doc-info">
              <Link to={"/"} onClick={handleSectionClick}><h3>Delivery Dashboard</h3></Link>
          </div>
        </div>

       
        <div className="db-btn">
          <Link to={'/profile'} onClick={handleSectionClick}>
            <button
              className=" bg-tailtertiary py-2 hover:bg-tailtertiary3 w-full rounded-sm ms-2"
            >
              PROFILE
            </button>
          </Link>
        </div>

        <div className="db-btn">
          <Link onClick={handleSectionClick}>
            <button
              className="ml-2 py-2 bg-tailtertiary hover:bg-red-600 w-full rounded-sm"
              onClick={() => {
                window.location.href = "https://baseapm-1atp.onrender.com/";
              }}

            >
              LOGOUT
            </button>
          </Link>
        </div>

        <div className="inventory-manager">

          <div className="inventory-manager">
            <section className="routes">
              <h2 className="border-2 border-black justify-center flex mx-1 py-2 bg-tailtertiary justify-center text-dark">
                View Menu
              </h2>
              <div className="view-o-queue">
                <Link onClick={handleSectionClick}>
                  <MyNavitem
                    className="heading"
                    path="/orderqueue"
                    routename="View Order Queue"
                    icon={<VscPreview />}

                  />
                </Link>
              </div>

              <Link to={'/leave'} onClick={handleSectionClick} className="heading border-2 border-black justify-center flex mx-1 py-2 bg-tailtertiary justify-center">Leave</Link>
            </section>
          </div>
        </div>
      </div>

      <Outlet />

    </>
  );
}

export default Sidebar;



