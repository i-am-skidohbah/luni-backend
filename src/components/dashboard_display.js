import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from "chart.js";

import { useState, useEffect } from "react";
import { Card, Divider, Space, Statistic, Table, Typography } from "antd";
import {
  DollarCircleOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { ChartData, Order } from "../components/API";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const DbDisplay = () => {
  const [time, setTime] = useState(new Date());
  const [Mobile, setMobile] = useState(760);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const getTimeOfDay = () => {
    const hours = time.getHours();
    if (hours >= 0 && hours < 12) {
      return "Morning";
    } else if (hours >= 12 && hours < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };
  // const mobile = innerWidth;
  return (
    <Space direction="vertical" size={20}>
      <Space size={20} direction="vertical">
        <Typography.Text
          style={{ fontSize: 24, fontWeight: "bold" }}
          level={1}
        >{`${time.getHours()} : ${time.getMinutes()} m : ${time.getUTCSeconds()}secs`}</Typography.Text>
        <Typography.Text
          style={{ fontSize: 24, fontWeight: "normal" }}
        >{`${getTimeOfDay()} Admin`}</Typography.Text>
        <Typography.Title level={4}>welcome back</Typography.Title>
      </Space>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 30,
                padding: 8,
              }}
            />
          }
          title={"orders"}
          value={23323}
        />
        <DashboardCard
          icon={
            <ShopOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 30,
                padding: 8,
              }}
            />
          }
          title={"products"}
          value={23323}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(0,0,0,0.25)",
                borderRadius: 20,
                fontSize: 30,
                padding: 8,
              }}
            />
          }
          title={"Revenu"}
          value={23323}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 30,
                padding: 8,
              }}
            />
          }
          title={"customer"}
          value={23323}
        />
      </Space>
      <Space direction="horizontal">
        <GetOrders />
        <LineGraph />
      </Space>
    </Space>
  );
};
export default DbDisplay;

export const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card style={{ width: 300 }}>
      <Space direction="veritcal" className="py-5 w-1/4">
        {icon}
        <Statistic title={title} value={value} className="pl-10" />
      </Space>
    </Card>
  );
};

export const GetOrders = () => {
  const [dataSource, setDataSource] = useState();
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Order().then((data) => {
      setDataSource(data.products.splice(0, 7));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recents Orders</Typography.Text>
      <Table
        columns={[
          { title: "Title", dataIndex: "title" },
          { title: "Quantity", dataIndex: "quantity" },
          { title: "Price", dataIndex: "discountedTotal" },
        ]}
        loading={Loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
};

const LineGraph = () => {
  const options = {};
  return (
    <Card style={{ width: 400, height: 200 }}>
      <Line options={options} data={ChartData} />;
    </Card>
  );
};
