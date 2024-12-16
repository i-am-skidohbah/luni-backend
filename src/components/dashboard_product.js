import { Table, Typography, Space, Avatar, Rate, Card } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import { Products } from "./API";

const DbProduct = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState();

  useEffect(() => {
    setLoading(true);
    Products().then((data) => setDataSource(data.products), setLoading(false));
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Text level={2}>Products</Typography.Text>

      <Table
        columns={[
          {
            title: "thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },

          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} />;
            },
          },

          {
            title: "Stocks",
            dataIndex: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },

          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      ></Table>
    </Space>
  );
};

export default DbProduct;

{
  /* <div className="row">
<div
  className="col-lg-12 rounded shadow bg-white p-3 border-start border-bottom border-success "
  style={{ height: "300px" }}
>
  <div className="d-flex justify-content-between">
    <div className="">
      <h3>
        <b>Products</b>
      </h3>
    </div>

    <div>
      <button className="btn btn-outline-success">
        <b>See all</b>
      </button>
    </div>
  </div>
  <hr className="" />

  <div>
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>category</th>
          <th>price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>solar battery</td>
          <td>battery</td>
          <td>$ 1200.00</td>
          <td>
            <div className="d-flex justify-content-around">
              <div>
                <button className="btn btn-sm btn-success"> hello</button>
              </div>
              <div>
                <button className="btn btn-sm btn-success"> hello</button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>solar battery</td>
          <td>battery</td>
          <td>$ 1200.00</td>
          <td>
            <div className="d-flex justify-content-around">
              <div>
                <button className="btn btn-sm btn-success"> hello</button>
              </div>
              <div>
                <button className="btn btn-sm btn-success"> hello</button>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>solar battery</td>
          <td>battery</td>
          <td>$ 1200.00</td>
          <td>
            <div className="d-flex justify-content-around">
              <div>
                <button className="btn btn-sm btn-success"> hello</button>
              </div>
              <div>
                <button className="btn btn-sm btn-success"> hello</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>; */
}

// </div>
