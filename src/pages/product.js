import React from "react";
// import  Tab  from 'react-bootstrap/Tab';
// import { Tabs } from "react-bootstrap";
import AddProduct from "../components/addProduct";
import ShowProduct from "../components/viewProducts";

function Product(){
    return (
        <>
        <div class="container mt-3">
        <h2>Toggleable Tabs</h2>
       
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#home">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu1">Add Products</a>
          </li>
          
        </ul>
      
        <div class="tab-content">
          <div id="home" class="container tab-pane active "> <br />
            <ShowProduct />
          </div>
          <div id="menu1" class="container tab-pane fade"> <br />
            <AddProduct />
          </div>
        </div>
      </div>

        </>
    )
}

export default Product;