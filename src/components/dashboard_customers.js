import React, { useEffect } from "react";
import { Table, Typography, Space } from "antd";
import { useState } from "react";
import { Customers, fetchCustomers } from "./API";
import { db } from "../firebase_config/firebase";
import { collection, getDocs } from "firebase/firestore";
function DbCustomers() {
  const [customerData, setCustomerData] = useState();
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     Customers()
  //       .then((data) => setCustomerData(data.users))
  //       .catch((err) => console.log(err), setLoading(false));
  //   }, []);

  const fetchCustomers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "customers"));
      const customerData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCustomerData(customerData);
    } catch (error) {
      console.error("Error fetching customers: ", error);
    }
    // console.log(customerData);
  };

  fetchCustomers();

  return (
    <>
      <Space size={40} direction="vertical">
        <Typography.Text level={4}>Our Customers </Typography.Text>
        <Table
          columns={[
            {
              title: "FirstName",
              dataIndex: "firstName",
            },
            {
              title: "LastName",
              dataIndex: "lastName",
              render: (value) => <span>{value}</span>,
            },

            {
              title: "Email",
              dataIndex: "email",
            },

            {
              title: "Phone",
              dataIndex: "phone",
            },

            {
              title: "Address",
              dataIndex: "address",
              render: (value) => (
                <span>
                  {value.address} {value.city}
                </span>
              ),
            },
          ]}
          loading={loading}
          dataSource={customerData}
          pagination={{ pageSize: 5 }}
        ></Table>
      </Space>
    </>
  );
}

export default DbCustomers;
