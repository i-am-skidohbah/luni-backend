// import React, { useState, useEffect } from "react";
// import Stack from "react-bootstrap/Stack";
// import {
//   Carousel,
//   Container,
//   Row,
//   Col,
//   Button,
//   ListGroup,
//   Badge,
// } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import "bootstrap/dist/css/bootstrap.min.css";
// import DbProduct from "../components/dashboard_product";
// import DbCustomers from "../components/dashboard_customers";
// import DbDisplay from "../components/dashboard_display";
// import "./css/Dashboard.css";
// import Img1 from "../assets/sl1.jpg";

// function Dashbaord() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const getTimeOfDay = () => {
//     const hours = time.getHours();
//     if (hours >= 0 && hours < 12) {
//       return "Morning";
//     } else if (hours >= 12 && hours < 18) {
//       return "Afternoon";
//     } else {
//       return "Evening";
//     }
//   };

//   const alertClicked = () => {
//     alert("You clicked the third ListGroupItem");
//   };

//   return (
//     <>
//       <div></div>
//     </>
//   );
// }

// export default Dashbaord;
