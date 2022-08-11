import { useParams } from "react-router-dom";
import { ORDER } from "../assets/Helpers/apiUrls";
import { useGetApi } from "../assets/Hooks/useGetApi";
import Moment from "react-moment";
import { calculateTotal } from "../assets/Utils/helpers";

function OrderView() {
  const { orderId } = useParams();
  const order = useGetApi(`${ORDER}/${orderId}`);
  const subTotal = calculateTotal(order?.detail?.products);
  return (
    <>
      <a href="orders.html">
        <h3 className="pull-left bold uppercase black mt-2">
          <i className="fas fa-angle-left" /> Received Orders
        </h3>
      </a>
      <div className="clearfix" />
      <div className="card jost pad-20 p-2 mt-2 rounded-1">
        <h4 className="p_lg black medium">Order &amp; Account Information </h4>
        <hr />
        <div className="row">
          <div className="col-xl-4 mt-1 col-lg-5">
            <h4 className="p_sm medium clr-orange">Order Information </h4>
            <div className="d-flex mt-2 justify-content-between align-items-center">
              <h4 className="p_sm medium">Order Date </h4>
              <p className="p_sm l-grey">
                <Moment format="DD-MM-YYYY">{order?.detail?.createdAt}</Moment>
              </p>
            </div>
            <div className="d-flex mt-2 justify-content-between align-items-center">
              <h4 className="p_sm medium">Order ID </h4>
              <p className="p_sm l-grey">{orderId}</p>
            </div>
          </div>
          <div className="offset-xl-4 mt-1 col-lg-5 col-xl-4 offset-lg-2">
            <h4 className="p_sm medium clr-orange">Account Information </h4>
            <div className="d-flex mt-2 justify-content-between align-items-center">
              <h4 className="p_sm medium">Customer Address </h4>
              <p className="p_sm l-grey">{order?.detail?.address}</p>
            </div>
            <div className="d-flex mt-2 justify-content-between align-items-center">
              <h4 className="p_sm medium">Customer Email</h4>
              <p className="p_sm l-grey">{order?.detail?.userId.email}</p>
            </div>
          </div>
        </div>
        <h4 className="mt-3 black p_lg medium">Address Information </h4>
        <hr />
        <h4 className="p_sm medium clr-orange">Address</h4>
        <p className="p_sm mt-1 l-grey">{order?.detail?.address}</p>
        <h4 className="mt-3 black p_lg medium">Order Information </h4>
        <hr />
        {order?.detail?.products.length >= 1 &&
          order?.detail?.products.map((product) => {
            const total = product?.price * product?.quantity;
            return (
              <div
                className="d-flex align-items-center flex-wrap justify-content-between"
                key={product?._id}
              >
                <div className="d-flex">
                  <img
                    src="/images/product-2.png"
                    alt=""
                    className="d-inline-block order-img"
                  />
                  <div className="d-flex flex-wrap flex-sm-nowrap justify-content-between">
                    <div className="ml-1">
                      <h4 className="p_sm medium black lh">Product Name</h4>
                      <p className="p_sm l-grey lh">
                        {product?.productId?.name}
                      </p>
                    </div>
                    <p className="p_sm l-grey align-self-center mx-5 lh">
                      {product?.quantity}
                    </p>
                    <div className="ml-1 text-right">
                      <h4 className="p_sm medium black lh">Unit Price</h4>
                      <p className="p_sm l-grey lh">${product?.price}</p>
                    </div>
                  </div>
                </div>
                <div className="ml-1 text-right">
                  <h4 className="p_sm medium black lh">Product Total</h4>
                  <p className="p_sm l-grey lh">${total}</p>
                </div>
              </div>
            );
          })}

        <hr className="mt-2" />
        <div className="d-flex justify-content-end">
          <h4 className="p_sm medium black lh">Sub Total</h4>
          <p className="p_sm l-grey ml-5 lh text-right">${subTotal}</p>
        </div>
        <hr className="half-line" />
        <div className="d-flex justify-content-end">
          <div className="d-flex">
            <h4 className="p_sm medium black lh">Total Rates</h4>
            <p className="p_sm l-grey ml-5 lh text-right ">${subTotal}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderView;
