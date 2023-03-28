import "./Booking.css";
import { useState } from "react";
import AddEmployee from "./subViews/AddCustomer";

const Booking = () => {
    const [currentView, setCurrentView] = useState(<AddEmployee />);
    
  return (
    <div className="Booking">
      <div className="row">
        <div className="col">{currentView}</div>
      </div>
    </div>
  );
};

export default Booking;
