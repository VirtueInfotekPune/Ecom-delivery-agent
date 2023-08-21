import React, { useState } from "react";
import "./OrderDetails.css";
import Navbar from "../../components/Navbar";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const OrderDetails = ({ product }) => {
  const { id } = useParams();
  // console.log(product)
  // const [quantity, setQuantity] = useState(1);



  if (!product || product.length === 0) {
    return <p>Loading...</p>;
  }

  const products = product.find((p) => p.id == id);

  if (!products) {
    return <p>Product details not found.</p>;
  }

  return (
    <div className="container">
      <div className="main bg-tailtertiary h-screen m-0 p-0">
        <Navbar pagename={<h1>Order Details</h1>} screenname={<h2>DA104</h2>} />
        <div className="details-page">
          <h2>Order : {products.id}</h2>
          <div className="item-card">

          {Array.isArray(products.items) && products.items.length > 0 ? (
              <>
               
                <ul>
                  {products.items.map((item, index) => (
                    <li key={index}>
                      <img src={item.image} />
                     
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No items found for this product.</p>
            )}
           

            <div className="item-details">

            {Array.isArray(products.items) && products.items.length > 0 ? (
              <>
                <h3 className="font-family-pacifico text-danger">Items</h3>
                <ul>
                  {products.items.map((item, index) => (
                    <li key={index}>
                      <p>Product Name: {item.productname}</p>
                      <p>Quantity: {item.quantity}{item.uom}</p>
                      <p>Offer: {item.offer}</p>
                      <p>Product Price :Rs.{item.productprice}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p>No items found for this product.</p>
            )}
<hr></hr>
            <p>Total price : {products.totalPrice}</p>
            <hr></hr>
              
              {/* <h3>Tomato</h3>
              <p>Quantity: {quantity} Kg</p>
              <p>Price: Rs.31</p> */}
              <div>
                <div className="verified">
                  <Link to={`/orderqueue/orderdetails/deliveryaddress/${products.id}`} className="update-button">Quantity Verified</Link>
                  <Link to={`/orderqueue/orderdetails/deliveryaddress/${products.id}`} className="update-button">Item Verified</Link>
                </div>
                <div className="reject">
                  <Link to="/orderqueue" className="update-button">Rejected</Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <div className="container">
    //     <div className="main bg-tailtertiary h-screen m-0 p-0">
    //       <Navbar pagename={<h1>Order Details</h1>} screenname={<h2>DA104</h2>} />
    //       <div className="details-page">
    //         <h1>Product Details</h1>
    //         <h1>Product ID {products.id}</h1>
    //         <p>ordered_on: {products.ordered_on}</p>
    //         <p>totalPrice: {products.totalPrice}</p>
    //         <p>deliveryAddress: {products.deliveryAddress}</p>

    //         {Array.isArray(products.items) && products.items.length > 0 ? (
    //           <>
    //             <h3>Items</h3>
    //             <ul>
    //               {products.items.map((item, index) => (
    //                 <li key={index}>
    //                   <p>Product Name: {item.productname}</p>
    //                   <p>Quantity: {item.quantity}</p>
    //                   <p>Product Price: {item.productprice}</p>
    //                 </li>
    //               ))}
    //             </ul>
    //           </>
    //         ) : (
    //           <p>No items found for this product.</p>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </>

  );
};



export default OrderDetails;
