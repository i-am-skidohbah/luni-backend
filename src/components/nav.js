import logo from "../assets/luni_logo.png";

import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

function Navv() {
  const logo_style = {
    height: "40px",
    width: "120px",
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <div></div>;
}

export default Navv;
