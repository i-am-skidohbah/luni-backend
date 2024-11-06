import React from "react";

import AddCustomer from "../components/addCustomers";
import CustomerList from "../components/viewCustomers";


function Customers(){
    return (
        <>
        <div class="container mt-3">
        <h2>Toggleable Tabs</h2>
       
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#home">Customers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu1">Add Products</a>
          </li>
          
        </ul>
      
        <div class="tab-content">
          <div id="home" class="container tab-pane active "> <br />
            <CustomerList />
          </div>
          <div id="menu1" class="container tab-pane fade"> <br />
            <AddCustomer />
          </div>
        </div>
      </div>
        </>
    )
}

export default Customers;