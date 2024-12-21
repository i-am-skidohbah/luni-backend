import {
  AppstoreAddOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import humburger from "../../assets/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import close from "../../assets/close_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
import { Menu } from "antd";
import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [mobile, setMobile] = useState(false);
  const checkForMobile = () => {
    setMobile(!mobile);
  };
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full bg-red-500">
      <div className="absolute top-0 -left-4 px-4 w-32 h-24 md:hidden block">
        <img
          src={humburger}
          onClick={() => checkForMobile()}
          className="w-12 h-12"
        />
      </div>

      <div className={`${mobile ? "hidden" : "block"} relative`}>
        <img
          src={close}
          onClick={() => checkForMobile()}
          className="absolute md:hidden block top-0 right-1 w-12 h-12"
        />
        <Menu
          className="text-2xl h-screen w-full bg-green-400 md:w-[400px] py-5 md:py-0 flex items-center flex-col gap-3"
          onClick={(items) => {
            //   items.key
            navigate(items.key);
          }}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreAddOutlined />,
              key: "/",
            },
            {
              label: "Products",
              icon: <ShopOutlined />,
              key: "/products",
            },
            {
              label: "Orders",
              icon: <ShoppingCartOutlined />,
              key: "/orders",
            },
            {
              label: "Customers",
              icon: <UserSwitchOutlined />,
              key: "/customer",
            },
            {
              label: "Blogs",
              icon: <ShoppingCartOutlined />,
              key: "/blogs",
            },
          ]}
        ></Menu>
      </div>
    </div>
  );
};

export default SideBar;
