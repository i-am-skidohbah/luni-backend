import React from "react";
import  Tab  from 'react-bootstrap/Tab';
import { Tabs } from "react-bootstrap";
import AddCustomer from "../components/addCustomers";
// import AddProduct from "../components/addProduct";
// import ShowProduct from "../components/viewProducts";

function Customers(){
    return (
        <>
        <p>hellllllo</p>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Products">
      <AddCustomer />
      </Tab>
      <Tab eventKey="profile" title="Add Product">
        {/* <AddProduct /> */}
      </Tab>
      
    </Tabs>
        </>
    )
}

export default Customers;