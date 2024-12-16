import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/loginScreen";
import Landing from "./pages/landing";
import { AuthProvider } from "./pages/authContext";
import ProtectedRoute from "./pages/protectedRoute";
import { Divider, Space } from "antd";

import Layout from "./components/layout";
import AppHeader from "./components/AppHeader";
import SideBar from "./components/SideMenu";
import Dashbaord from "./components/PageContent/dashboard";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-50">
      <AppHeader />
      <Space className="flex flex-1 justify-start items-start ">
        <SideBar />
        <Dashbaord />
      </Space>
      <AppFooter />
    </div>
    // <Router>
    //   <AuthProvider>
    //     <Routes>
    //       <Route path="/login" element={<Login />} />
    //       <Route
    //         path="/admin/*"
    //         element={
    //           <ProtectedRoute>
    //             <Layout />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route path="/" element={<Navigate to="/login" />} />
    //     </Routes>
    //   </AuthProvider>
    // </Router>
  );
}

export default App;
