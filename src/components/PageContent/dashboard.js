import React, { useState, useEffect } from "react";
import AppRoutes from "../AppRoutes";

function Dashbaord() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getTimeOfDay = () => {
    const hours = time.getHours();
    if (hours >= 0 && hours < 12) {
      return "Morning";
    } else if (hours >= 12 && hours < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };
  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };
  // console.log(time.getUTCSeconds());
  return (
    <div className="pl-6 pt-10">
      <AppRoutes />
    </div>
  );
}

export default Dashbaord;
