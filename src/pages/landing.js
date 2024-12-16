import { Table, Typography, Space } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import { Products } from "../components/API";

const Order = () => {
  const [dataSource, setDataSource] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Products().then((data) => {
      setDataSource(data.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={40} direction="vertical">
      <Typography.Text level={4}>Orders </Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },

          {
            title: "Quantity",
            dataIndex: "totalQuantity",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },

          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      ></Table>
    </Space>
  );
};

export default Order;
