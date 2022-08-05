import React from "react";

function Dashboard() {
  return (
    <>
      <section id="configuration">
        <div className="row">
          <div className="col-12">
            <div className="clearfix" />
            <div className="row">
              <div className="col-xl-3 col-md-6 mt-3">
                <div className="dash-card-inner black h-100 py-2 px-1">
                  <h3>Total Sales</h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <img
                      src="images/bill.png"
                      alt=""
                      className="img-fluid mt-1"
                    />
                    <h3 className="mt-1">$562,949.24</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mt-3">
                <div className="dash-card-inner black h-100 py-2 px-1">
                  <h3>Total Orders</h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <img
                      src="images/cart.png"
                      alt=""
                      className="img-fluid mt-1"
                    />
                    <h3 className="mt-1">314</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mt-3 mx-auto">
                <div className="dash-card-inner black h-100 py-2 px-1">
                  <h3>Total Products</h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <img
                      src="images/boxes.png"
                      alt=""
                      className="img-fluid mt-1"
                    />
                    <h3 className="mt-1">52</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mt-3 mx-auto">
                <div className="dash-card-inner black h-100 py-2 px-1">
                  <h3>Total Customers</h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <img
                      src="images/users.png"
                      alt=""
                      className="img-fluid mt-1"
                    />
                    <h3 className="mt-1">453</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card  pad-20 mt-2 rounded-0">
          <div className="card-content collapse show">
            <div className="card-body table-responsive card-dashboard">
              <h1 className="pull-left black bold mt-2">
                <i className="fas fa-chart-bar" /> Sales Analytics
              </h1>
              <div className="bottom tickets mt-5">
                <div className="chart-main position-relative">
                  <div className="row">
                    <div className="col-12 col-xl-11">
                      <div className="card-body">
                        <div
                          className="height-400 echart-container"
                          id="basic-column"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="card jost pad-20 mt-2 rounded-1">
        <div className="card-content collapse show">
          <div className="card-body table-responsive card-dashboard">
            <h3 className="pull-left black mt-2">
              <i className="fas fa-shopping-cart" /> Latest Orders
            </h3>
            <div className="clearfix" />
            <div className="clearfix" />
            <div>
              <table className="table table-striped table-bordered zero-configuration">
                <thead>
                  <tr>
                    <th className="d-grey bold">S.NO</th>
                    <th className="d-grey bold">Order Id</th>
                    <th className="d-grey bold">customer</th>
                    <th className="d-grey bold">status</th>
                    <th className="d-grey bold">total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-0">01</td>
                    <td className="py-0">454</td>
                    <td className="py-0">Bran</td>
                    <td className="py-0">Pending</td>
                    <td className="py-0">$163</td>
                  </tr>
                  <tr>
                    <td className="py-0">01</td>
                    <td className="py-0">454</td>
                    <td className="py-0">Bran</td>
                    <td className="py-0">Pending</td>
                    <td className="py-0">$163</td>
                  </tr>
                  <tr>
                    <td className="py-0">01</td>
                    <td className="py-0">454</td>
                    <td className="py-0">Bran</td>
                    <td className="py-0"> Pending</td>
                    <td className="py-0">$163</td>
                  </tr>
                  <tr>
                    <td className="py-0">01</td>
                    <td className="py-0">454</td>
                    <td className="py-0">Bran</td>
                    <td className="py-0">Pending </td>
                    <td className="py-0">$163</td>
                  </tr>
                  <tr>
                    <td className="py-0">01</td>
                    <td className="py-0">454</td>
                    <td className="py-0">Bran</td>
                    <td className="py-0">Pending</td>
                    <td className="py-0">$163</td>
                  </tr>
                  <tr>
                    <td className="py-0">01</td>
                    <td className="py-0">454</td>
                    <td className="py-0">Bran</td>
                    <td className="py-0">Pending</td>
                    <td className="py-0">$163</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
