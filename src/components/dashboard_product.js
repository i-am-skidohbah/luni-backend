import {
  Table,
  Typography,
  Space,
  Avatar,
  Rate,
  Card,
  Button,
  Modal,
  Input,
} from "antd";
import React from "react";
import { useState, useEffect } from "react";
import { Products } from "./API";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const DbProduct = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState();
  const [isEdditting, setisEdditting] = useState(false);
  const [EddittingProduct, setEddittingProducts] = useState(null);

  useEffect(() => {
    setLoading(true);
    Products().then((data) => setDataSource(data.products), setLoading(false));
  }, []);

  const DelectProduct = (record) => {
    Modal.confirm({
      title: "Do you want to delect this product",
      okText: "yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((product) => (product.id = !record.id));
        });
      },
    });
  };

  const EditProduct = (record) => {
    setisEdditting(true);
    setEddittingProducts({ ...record });
  };
  const resetEdittingProd = () => {
    setisEdditting(false);
    setEddittingProducts(null);
  };
  return (
    <Space size={20} direction="vertical">
      <Typography.Text level={2}>Products</Typography.Text>
      <Button>Add Products</Button>
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
          {
            title: "Action",
            render: (record) => (
              <>
                <DeleteOutlined
                  onClick={() => DelectProduct(record)}
                  style={{ color: "red", padding: 10 }}
                />
                <EditOutlined
                  onClick={() => {
                    EditProduct(record);
                    console.log(isEdditting);
                  }}
                />
              </>
            ),
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      ></Table>
      <Modal
        title="do you  want to Edit this products"
        okText="Save"
        open={isEdditting}
        onCancel={() => resetEdittingProd()}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((product, index) => {
              if (product.id === EddittingProduct.id) {
                return EddittingProduct;
              } else {
                return product;
              }
            });
          });
          resetEdittingProd();
        }}
      >
        <Input
          value={EddittingProduct?.title}
          onChange={(e) =>
            setEddittingProducts((pre) => {
              return { ...pre, title: e.target.value };
            })
          }
        />
        <Input
          value={EddittingProduct?.price}
          onChange={(e) =>
            setEddittingProducts((pre) => {
              return { ...pre, price: e.target.value };
            })
          }
          placeholder="title"
        />
        <Input
          value={EddittingProduct?.stock}
          onChange={(e) =>
            setEddittingProducts((pre) => {
              return { ...pre, stock: e.target.value };
            })
          }
        />
        <Input
          value={EddittingProduct?.brand}
          onChange={(e) =>
            setEddittingProducts((pre) => {
              return { ...pre, brand: e.target.value };
            })
          }
        />
        <Input
          value={EddittingProduct?.category}
          onChange={(e) =>
            setEddittingProducts((pre) => {
              return { ...pre, category: e.target.value };
            })
          }
        />
      </Modal>
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
