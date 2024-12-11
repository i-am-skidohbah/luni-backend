import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import AddCustomer from "../components/addCustomers";
import CustomerList from "../components/viewCustomers";
import AddProduct from "../components/addProduct";


function Customers(){
  const [key, setKey] = useState('home');
  return (
    <div className="container mt-3">
      <h2>Toggleable Tabs</h2>
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="home">Customers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="menu1">Add Customers</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="home">
            <CustomerList />
          </Tab.Pane>
          <Tab.Pane eventKey="menu1">
            <AddCustomer />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};



export default Customers;