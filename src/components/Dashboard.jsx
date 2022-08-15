import { useEffect } from "react";
import { useState } from "react";
import {
  getOrders,
  getProducts,
  getCustomers,
  getTotalSales,
} from "../assets/Services/Dashboard";

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [products, setProducts] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  const fetchData = async () => {
    const { detail: orders } = await getOrders();
    const { detail: products } = await getProducts();
    const { detail: customers } = await getCustomers();
    const { detail: totalSales } = await getTotalSales();

    setOrders(orders);
    setProducts(products);
    setCustomers(customers);
    setTotalSales(totalSales);
  };

  useEffect(() => {
    fetchData();
  }, [orders, products, customers, totalSales.length]);
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
                    <h3 className="mt-1">${totalSales[0]?.totalSales}</h3>
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
                    <h3 className="mt-1">{orders}</h3>
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
                    <h3 className="mt-1">{products}</h3>
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
                    <h3 className="mt-1">{customers}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
