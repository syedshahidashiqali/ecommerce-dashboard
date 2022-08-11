import {
  ALLORDERS,
  ALLPRODUCTS,
  TOTALSALES,
  USERS,
} from "../assets/Helpers/apiUrls";
import { useGetApi } from "../assets/Hooks/useGetApi";

function Dashboard() {
  const orders = useGetApi(ALLORDERS);
  const products = useGetApi(ALLPRODUCTS);
  const users = useGetApi(`${USERS}/?limit=100&page=1`);
  const total = useGetApi(TOTALSALES);

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
                    <h3 className="mt-1">
                      ${total.status === true && total?.detail[0]?.totalSales}
                    </h3>
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
                    <h3 className="mt-1">{orders?.detail?.length}</h3>
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
                    <h3 className="mt-1">{products?.detail?.length}</h3>
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
                    <h3 className="mt-1">{users?.detail?.docs?.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="card  pad-20 mt-2 rounded-0">
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
        </div> */}
      </section>
    </>
  );
}

export default Dashboard;
