import React from "react";

const Navbar = (props) => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <>
      <div className="navbar-container border-2 border-blue-600">
        <div className="text-black font-poppins font-bold text-2xl">
          {props.pagename}
        </div>
      </div>
      <div className="mt-2 pl-4 border-2 flex border-blue-600">
        <div className="w-full text-black font-poppins font-bold text-xl">
          <p>Date: {currentDate}</p>
        </div>
        <div className="w-full text-end font-bold mr-4 ">{props.screenname}</div>
      </div>
    </>
  );
};

export default Navbar;
