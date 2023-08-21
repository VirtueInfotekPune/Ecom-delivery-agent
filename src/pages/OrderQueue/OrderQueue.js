import React, { useState, useEffect } from "react";
import "./OrderQueue.css";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
// import orders from "../OrderQueue/OrderData";

const OrderQueue = () => {
  // const [orderList, setOrderList] = useState(orders);

  // const handleReject = (orderId) => {
  //   const updatedOrderList = orderList.filter((order) => order.id !== orderId);
  //   setOrderList(updatedOrderList);
  // };

  const [getOrder, setGetOrder] = useState([]);
  const id = useParams()
  console.log("order", getOrder)

  const [orderPlaced, setOrderPlaced] = useState(false);


  useEffect(() => {
    // Fetch data and set it in the orderData state
    const getData = async () => {
      try {
        const response = await fetch(`https://node-api-da.onrender.com/orders`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const json = await response.json();
        setGetOrder(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  // DELETE ORDER BY AGENTS 
  // const handleDeleteOrder = async (orderId) => {
  //   try {
  //     const response = await fetch(`https://node-api-da.onrender.com/orders/${orderId}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok.");
  //     }
  
  //     // Update the getOrder state by removing the deleted order
  //     setGetOrder((prevOrders) => prevOrders.filter(order => order.id !== orderId));
  //   } catch (error) {
  //     console.error("Error deleting order:", error);
  //   }
  //   setOrderPlaced(true)
  //   setTimeout(() => {

  //     setOrderPlaced(false)
  //   },2000,[])
  // };
  

  return (
    <div className="container">
      <div className="main bg-tailtertiary h-screen m-0 p-0">
        <Navbar pagename={<h1>Agent Order & Details</h1>} screenname={<h2>DA101</h2>} />

        <div className="orders-container">
          <div className="head mt-3">
            <h1>Orders</h1>
            <h1>Items</h1>
            <h1>Details</h1>
          </div>


          {
            getOrder.map((data) => {

              return (
                <>

                  <div key={data.id} className="order-card mt-3">
                    <h2>Order_ID : {data.id}</h2>
                    <h2>Address : {data.deliveryAddress}</h2>
                    <div className="inner-div">
                      <Link to={`/orderqueue/orderdetails/${data.id}`} className="update-button">
                        Details
                      </Link>

                      <button className="update-button">
                        Delete
                      </button>
{/* 
                      <button className="update-button" onClick={() => handleDeleteOrder(data.id)}>
                        Delete
                      </button> */}


                    </div>
                  </div>

                       {/* {orderPlaced && (
        <div className="cart-message">
          <p>Your order is Deleted!</p>
        </div>
      )} */}
                </>
              )

            })
          }


        </div>
      </div>
    </div>
  );
};

export default OrderQueue;
