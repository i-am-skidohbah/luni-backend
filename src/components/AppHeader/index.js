import { Badge, Image, Space, Typography } from "antd";
import React from "react";
import logo from "../../assets/luni_logo.png";
import { BellOutlined, MailOutlined } from "@ant-design/icons";

const AppHeader = () => {
  return (
    <div className="h-[70px] pl-1 pr-4 pt-4 pb-1 flex justify-between items-center p-1 border-b-2 border-gray-500">
      <Image width={80} src={logo}></Image>
      <Typography.Title>dashboard</Typography.Title>
      <Space className="pr-10">
        <Badge count={20} dot>
          <MailOutlined className="text-4xl" />
        </Badge>
        <Badge count={10} className="">
          <BellOutlined className=" text-4xl " />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
