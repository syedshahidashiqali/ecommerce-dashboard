import { Link } from "react-router-dom";
import Table from "./Table";
import { useState } from "react";
import { useEffect } from "react";
import { getOrders } from "../assets/Services/Orders";
import { format_date } from "../assets/Utils/helpers";

function Orders() {
  const [orders, setOrders] = useState([]);
  const fields = [
    {
      label: "Order Date",
      key: "createdAt",
      format: format_date,
    },
    {
      label: "Address",
      key: "address",
    },
    {
      label: "Customer ID",
      key: "userId",
    },
  ];
  const fetchData = async () => {
    const { detail } = await getOrders();
    setOrders(detail);
  };

  useEffect(() => {
    fetchData();
  }, [orders?.length]);
  return (
    <>
      <h3 className="pull-left bold uppercase black mt-2">Orders</h3>
      <div className="clearfix" />
      <ul className="nav nav-pills mt-2" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#pills-received"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Received Orders
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-received"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="d-flex mt-3 align-items-center justify-content-between flex-wrap"></div>
          <div className="card jost pad-20 mt-2 rounded-1">
            <div className="card-content collapse show">
              <div className="card-body table-responsive card-dashboard">
                <div className="clearfix" />
                <div className="">
                  <Table
                    fields={fields}
                    data={orders}
                    hasPagination={false}
                    extraHeads={() => <th className="d-grey bold">action</th>}
                    extraCells={(item) => (
                      <td className="py-1">
                        <div className="btn-group mr-1 mb-1">
                          <button
                            type="button"
                            className="btn dropdown-toggle btn-drop-table btn-sm"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-v" />
                          </button>
                          <div
                            className="dropdown-menu"
                            x-placement="bottom-start"
                            style={{
                              position: "absolute",
                              transform: "translate3d(0px, 21px, 0px)",
                              top: 0,
                              left: 0,
                              willChange: "transform",
                            }}
                          >
                            <Link
                              to={`/orders/${item?._id}`}
                              className="dropdown-item uppercase"
                            >
                              <i className="fa fa-eye" />
                              View order
                            </Link>
                          </div>
                        </div>
                      </td>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
