import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import Profile from "./pages/Profile";
import SideBar from "./components/SideBar";
import UpdateProfile from "./pages/UpdateProfile";
import OrderQueue from "./pages/OrderQueue/OrderQueue";
import OrderDetails from "./pages/OrderQueue/OrderDetails";
import DeliveryAddress from "./pages/OrderQueue/DeliveryAddress";
import ChangeSlot from "./pages/OrderQueue/ChangeSlot";
import Sidebar from "./components/SideBar";
import React,{useState,useEffect} from "react";
import Leave from "./pages/OrderQueue/Leave";




Modal.setAppElement("#root");

function App() {

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    // Fetch data and set it in the orderData state
    const getOrder = async () => {
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
        setNewData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getOrder();
  }, []);


  return (
    <div className="flex font-poppins">
      <Router>
      
        <Routes>
            <Route exact path="/" element={<Sidebar />}>
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/profile/updateprofile" element={<UpdateProfile />} />


            {/* <Route exact path="/orderqueue" element={<OrderQueue />} />
            <Route exact path="/orderqueue/orderdetails" element={<OrderDetails />} /> */}
             <Route exact path="/orderqueue" component={OrderQueue} element={<OrderQueue />}/>
        <Route exact path="/orderqueue/orderdetails/:id" component={OrderDetails} element={<OrderDetails product={newData}/>} />

        <Route exact path="/leave" element={<Leave />} />


            <Route exact path="/orderqueue/orderdetails/deliveryaddress/:id" element={<DeliveryAddress product={newData}/>} />
            <Route exact path="/orderqueue/orderdetails/deliveryaddress/changeslot" element={<ChangeSlot />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
