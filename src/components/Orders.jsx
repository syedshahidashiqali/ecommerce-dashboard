import { ALLORDERS } from "../assets/Helpers/apiUrls";
import { useGetApi } from "../assets/Hooks/useGetApi";
import Moment from "react-moment";
import { Link } from "react-router-dom";

function Orders() {
  const orders = useGetApi(ALLORDERS);
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
          <div className="d-flex mt-3 align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center flex-wrap">
              <p className="grey">Show</p>
              <select className="entry-select ml-1" name="" id="">
                <option value="">10</option>
                <option value="">50</option>
                <option value="">100</option>
              </select>
              <p className="grey ml-1">Entries</p>
            </div>
            <input
              type="text"
              className="ml-1 px-1 h-45 py-0"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
          <div className="card jost pad-20 mt-2 rounded-1">
            <div className="card-content collapse show">
              <div className="card-body table-responsive card-dashboard">
                <div className="clearfix" />
                <div className="clearfix" />
                <div className="">
                  <table className="table table-striped table-bordered zero-configuration">
                    <thead>
                      <tr>
                        <th className="d-grey bold">Order ID</th>
                        <th className="d-grey bold">Order Date</th>
                        <th className="d-grey bold">Address</th>
                        <th className="d-grey bold">Customer ID</th>
                        <th className="d-grey bold">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders?.detail?.length >= 1 &&
                        orders?.detail.map((order) => {
                          return (
                            <tr key={order?._id}>
                              <td className="py-1">{order?._id}</td>
                              <td className="py-1">
                                <Moment format="YYYY/MM/DD">
                                  {order?.createdAt}
                                </Moment>
                              </td>
                              <td className="py-1">{order?.address}</td>
                              <td className="py-1">{order?.userId}</td>
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
                                      to={`/orders/${order?._id}`}
                                      className="dropdown-item uppercase"
                                      // href="orders-received-view.html"
                                    >
                                      <i className="fa fa-eye" />
                                      View order
                                    </Link>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-inprocess"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="d-flex mt-3 align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center flex-wrap">
              <p className="grey">Show</p>
              <select className="entry-select ml-1" name="" id="">
                <option value="">10</option>
                <option value="">50</option>
                <option value="">100</option>
              </select>
              <p className="grey ml-1">Entries</p>
            </div>
            <input
              type="text"
              className="ml-1 px-1 h-45 py-0"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
          <div className="card jost pad-20 mt-2 rounded-1">
            <div className="card-content collapse show">
              <div className="card-body table-responsive card-dashboard">
                <div className="clearfix" />
                <div className="clearfix" />
                <div className="">
                  <table className="table table-striped table-bordered zero-configuration">
                    <thead>
                      <tr>
                        <th className="d-grey bold">S.NO</th>
                        <th className="d-grey bold">Order id</th>
                        <th className="d-grey bold">order date</th>
                        <th className="d-grey bold">Amount paid</th>
                        <th className="d-grey bold">order status</th>
                        <th className="d-grey bold">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-0">01</td>
                        <td className="py-0">001</td>
                        <td className="py-0">10-15-2020</td>
                        <td className="py-0">$ 123</td>
                        <td className="py-0">
                          In Progress
                          <div className="btn-group mr-1 mb-1">
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-drop-table btn-sm"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-sort-down" />
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
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                delivered
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-0">
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
                              <a
                                className="dropdown-item uppercase"
                                href="edit-category.html"
                              >
                                <i className="fa fa-eye" />
                                View order
                              </a>
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                <img
                                  src="images/bicycle-grey.png"
                                  className="img-fluid"
                                />
                                assign rider
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-0">01</td>
                        <td className="py-0">001</td>
                        <td className="py-0">10-15-2020</td>
                        <td className="py-0">$ 123</td>
                        <td className="py-0">
                          In Progress
                          <div className="btn-group mr-1 mb-1">
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-drop-table btn-sm"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-sort-down" />
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
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                delivered
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-0">
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
                              <a
                                className="dropdown-item uppercase"
                                href="edit-category.html"
                              >
                                <i className="fa fa-eye" />
                                View order
                              </a>
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                <img
                                  src="images/bicycle-grey.png"
                                  className="img-fluid"
                                />
                                assign rider
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-0">01</td>
                        <td className="py-0">001</td>
                        <td className="py-0">10-15-2020</td>
                        <td className="py-0">$ 123</td>
                        <td className="py-0">
                          In Progress
                          <div className="btn-group mr-1 mb-1">
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-drop-table btn-sm"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-sort-down" />
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
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                delivered
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-0">
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
                              <a
                                className="dropdown-item uppercase"
                                href="edit-category.html"
                              >
                                <i className="fa fa-eye" />
                                View order
                              </a>
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                <img
                                  src="images/bicycle-grey.png"
                                  className="img-fluid"
                                />
                                assign rider
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-0">01</td>
                        <td className="py-0">001</td>
                        <td className="py-0">10-15-2020 </td>
                        <td className="py-0">$ 123</td>
                        <td className="py-0">
                          In Progress
                          <div className="btn-group mr-1 mb-1">
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-drop-table btn-sm"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-sort-down" />
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
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                delivered
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-0">
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
                              <a
                                className="dropdown-item uppercase"
                                href="edit-category.html"
                              >
                                <i className="fa fa-eye" />
                                View order
                              </a>
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                <img
                                  src="images/bicycle-grey.png"
                                  className="img-fluid"
                                />
                                assign rider
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-0">01</td>
                        <td className="py-0">001</td>
                        <td className="py-0">10-15-2020</td>
                        <td className="py-0">$ 123</td>
                        <td className="py-0">
                          In Progress
                          <div className="btn-group mr-1 mb-1">
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-drop-table btn-sm"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-sort-down" />
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
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                delivered
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-0">
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
                              <a
                                className="dropdown-item uppercase"
                                href="edit-category.html"
                              >
                                <i className="fa fa-eye" />
                                View order
                              </a>
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                <img
                                  src="images/bicycle-grey.png"
                                  className="img-fluid"
                                />
                                assign rider
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-0">01</td>
                        <td className="py-0">001</td>
                        <td className="py-0">10-15-2020</td>
                        <td className="py-0">$ 123</td>
                        <td className="py-0">
                          In Progress
                          <div className="btn-group mr-1 mb-1">
                            <button
                              type="button"
                              className="btn dropdown-toggle btn-drop-table btn-sm"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="fa fa-sort-down" />
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
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                delivered
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-0">
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
                              <a
                                className="dropdown-item uppercase"
                                href="edit-category.html"
                              >
                                <i className="fa fa-eye" />
                                View order
                              </a>
                              <a
                                className="dropdown-item uppercase"
                                href="#"
                                data-toggle="modal"
                                data-target="#inactivatecateg"
                              >
                                <img
                                  src="images/bicycle-grey.png"
                                  className="img-fluid"
                                />
                                assign rider
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-delivered"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="d-flex mt-3 align-items-center justify-content-between flex-wrap">
            <div className="d-flex align-items-center flex-wrap">
              <p className="grey">Show</p>
              <select className="entry-select ml-1" name="" id="">
                <option value="">10</option>
                <option value="">50</option>
                <option value="">100</option>
              </select>
              <p className="grey ml-1">Entries</p>
            </div>
            <input
              type="text"
              className="ml-1 px-1 h-45 py-0"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
          <div className="card jost pad-20 mt-2 rounded-1">
            <div className="card-content collapse show">
              <div className="card-body table-responsive card-dashboard">
                <div className="clearfix" />
                <div className="clearfix" />
                <div className="">
                  {/* <table className="table table-striped table-bordered zero-configuration">
                    <thead>
                      <tr>
                        <th className="d-grey bold">S.NO</th>
                        <th className="d-grey bold">Order id</th>
                        <th className="d-grey bold">order date</th>
                        <th className="d-grey bold">Amount paid</th>
                        <th className="d-grey bold">order status</th>
                        <th className="d-grey bold">action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-0">01</td>
                        <td className="py-0">001</td>
                        <td className="py-0">10-15-2020</td>
                        <td className="py-0">$ 123</td>
                        <td className="py-0">Delivered</td>
                        <td className="py-0">
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
                              <a
                                className="dropdown-item uppercase"
                                href="edit-category.html"
                              >
                                <i className="fa fa-eye" />
                                View order
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-0">01</td>
                        <td className="py-0">001</td>
                        <td className="py-0">10-15-2020</td>
                        <td className="py-0">$ 123</td>
                        <td className="py-0">Delivered</td>
                        <td className="py-0">
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
                              <a
                                className="dropdown-item uppercase"
                                href="edit-category.html"
                              >
                                <i className="fa fa-eye" />
                                View order
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-0">01</td>
                        <td className="py-0">001</td>
                        <td className="py-0">10-15-2020</td>
                        <td className="py-0">$ 123</td>
                        <td className="py-0">Delivered</td>
                        <td className="py-0">
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
                              <a
                                className="dropdown-item uppercase"
                                href="edit-category.html"
                              >
                                <i className="fa fa-eye" />
                                View order
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
    </>
  );
}

export default Orders;
