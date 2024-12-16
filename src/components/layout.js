import React from "react";

import Dashbaord from "./PageContent/dashboard";
import "./css/Layout.css";
import AppHeader from "./AppHeader";
import { Space } from "antd";
import SideBar from "./SideMenu";
import AppFooter from "./AppFooter";

function Layout() {
  return (
    <>
      <div className="flex flex-col w- h-screen  ">
        <AppHeader />
        <Space className="flex flex-1 justify-start items-start">
          <SideBar />
          <Dashbaord />
        </Space>
        <AppFooter />
      </div>
    </>
  );
}

export default Layout;
