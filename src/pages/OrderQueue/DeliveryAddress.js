import React from "react";
import { FaMotorcycle } from "react-icons/fa";
import "./DeliveryAddress.css";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const DeliveryAddress = ({product}) => {
  // console.log("products",product)

  const {id} = useParams()
  if (!product || product.length === 0) {
    return <p>Loading...</p>;
  }

  const products = product.find((p) => p.id == id);

  if (!products) {
    return <p>Product details not found.</p>;
  }


  const deliveryAddress = {
    name: "John Doe",
    address1: "123 Main St",
    address2: "Apt 456",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  };

  const deliverySlot = {
    date: "May 1, 2023",
    time: "9:00 AM - 11:00 AM",
  };

  const handleChangeSlot = () => {
    // Handle change slot action
  };

  return (
    <div className="container">
      <div className="main bg-tailtertiary h-screen m-0 p-0">
        <Navbar pagename={<h1>DeliveryAddress</h1>} screenname={<h2>DA105</h2>} />
        <div className="container">
          <div className="main bg-tailtertiary h-screen m-0 p-0">
            <div className="delivery-page">
              <div className="delivery-header">
                <div className="delivery-icon">
                  <FaMotorcycle />
                </div>
                <div className="delivery-title">
                  <h1>Doorstep Delivery</h1>
                </div>
              </div>
              <div className="delivery-body">
                <div className="delivery-address">
                  <div className="delivery-address-header">
                    <h2>Delivery Address</h2>
                  </div>
                  <div className="delivery-address-body">
                    <div className="delivery-address-line">
                      <span className="delivery-address-label">Name:</span>
                      <span className="delivery-address-value">
                        {deliveryAddress.name}
                      </span>
                    </div>
                    <div className="delivery-address-line">
                      <span className="delivery-address-label">Address:</span>
                      <span className="delivery-address-value">
                       {products.deliveryAddress}
                      </span>
                    </div>

                    <div className="delivery-address-line">
                      <span className="delivery-address-label">Total Price : {products.totalPrice}</span>
                      
                    </div>
                  </div>
                </div>
                <div className="delivery-options">
                  <div className="delivery-options-header">
                    <h2>Delivery Options</h2>
                  </div>
                  <div className="delivery-options-body">
                    {/* Delivery options go here */}
                  </div>
                </div>
                <div className="delivery-slot">
                  <div className="delivery-slot-header">
                    <h2>My Preferred Delivery Slot</h2>
                  </div>
                  <div className="delivery-slot-body">
                    <div className="delivery-slot-line">
                      <span className="delivery-slot-label">Date:</span>
                      <span className="delivery-slot-value">
                      {products.ordered_on}

                      </span>
                    </div>
                    <div className="delivery-slot-line">
                      <span className="delivery-slot-label">Time:</span>
                      <span className="delivery-slot-value">
                        {products.ordered_on}
                      </span>
                      <br></br><br></br>
                      <Link to="/orderqueue/orderdetails/deliveryaddress/changeslot"
                        className="update-button"
                        onClick={handleChangeSlot}
                      >
                        Change
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
