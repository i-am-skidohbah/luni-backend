import React from "react";
import { Route, Routes, routes } from "react-router-dom";
import DbDisplay from "../dashboard_display";
import DbProduct from "../dashboard_product";
import DbCustomers from "../dashboard_customers";

import Order from "../../pages/landing";
import Blog from "../../pages/blog";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DbDisplay />} />
        <Route path="/products" element={<DbProduct />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/customer" element={<DbCustomers />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
