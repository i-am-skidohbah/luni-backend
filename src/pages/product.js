import React from "react";
import  Tab  from 'react-bootstrap/Tab';
import { Tabs } from "react-bootstrap";
import AddProduct from "../components/addProduct";
import ShowProduct from "../components/viewProducts";

function Product(){
    return (
        <>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Products">
      <ShowProduct />
      </Tab>
      <Tab eventKey="profile" title="Add Product">
        <AddProduct />
      </Tab>
      
    </Tabs>
        </>
    )
}

export default Product;