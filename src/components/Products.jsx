import { useState } from "react";
import { ALLPRODUCTS } from "../assets/Helpers/apiUrls";
import { useGetApi } from "../assets/Hooks/useGetApi";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

function Products() {
  const [prodUrl, setProdUrl] = useState(ALLPRODUCTS);
  const [searchProd, setSearchProd] = useState("");
  const products = useGetApi(prodUrl);

  return (
    <>
      <h3 className="pull-left bold uppercase black mt-2">Products</h3>
      <div className="clearfix" />
      <div className="d-flex mt-1 align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center flex-wrap">
          <p className="grey">Show</p>
          <select className="entry-select ml-1" name="" id="">
            <option value="">10</option>
            <option value="">50</option>
            <option value="">100</option>
          </select>
          <p className="grey ml-1">Entries</p>
        </div>
        <div className="d-flex align-items-center flex-wrap">
          <Link to={"/products/add"}>
            <button className="px-2 h-45 py-0">Create Products</button>
          </Link>
          <input
            type="text"
            className="ml-1 px-1 h-45 py-0"
            placeholder="Search"
            value={searchProd}
            onChange={(e) => setSearchProd(e.target.value)}
            onKeyDown={(e) => {
              e.key === "Enter" &&
                setProdUrl(`${ALLPRODUCTS}/?name=${searchProd}`);
            }}
          />
        </div>
      </div>
      <div className="card jost pad-20 mt-2 rounded-1">
        <div className="card-content collapse show">
          <div className="card-body table-responsive card-dashboard">
            <div className="clearfix" />
            <div className="clearfix" />
            <div className="">
              <table className="table text-center table-striped table-bordered zero-configuration">
                <thead>
                  <tr>
                    <th className="d-grey bold">ID</th>
                    <th className="d-grey bold">Product name</th>
                    <th className="d-grey bold">price</th>
                    <th className="d-grey bold">Description</th>
                    <th className="d-grey bold">added on</th>
                    <th className="d-grey text-center bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.detail?.map((product) => {
                    return (
                      <tr key={product?._id}>
                        <td className="py-1">{product._id}</td>
                        <td className="py-1">{product?.name}</td>
                        <td className="py-1">${product?.price}</td>
                        <td className="py-1">{product?.description}</td>
                        <td className="py-1">{format(product.createdAt)}</td>
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
                                className="dropdown-item"
                                to={`/products/${product._id}/reviews`}
                              >
                                <i className="fa fa-eye" />
                                Reviews
                              </Link>
                              <Link
                                className="dropdown-item"
                                to={`/products/edit/${product._id}`}
                              >
                                <i className="fa fa-trash" />
                                Edit
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
            <div
              className="modal fade"
              id="inactivate"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered "
                role="document"
              >
                <div className="modal-content">
                  <button
                    type="button"
                    className="close text-right clr-orange mr-1 mt-1"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <div className="px-3 pb-5 text-center">
                    <img src="images/alert.png" alt="" className="img-fluid" />
                    <h3 className="jost bold mt-1 clr-orange">Alert</h3>
                    <p className="d-blue mt-1 medium ">
                      Are you sure you want to Inactivate this Product?
                    </p>
                    <div className="d-flex flex-wrap justify-content-center">
                      <a
                        href="#_"
                        data-toggle="modal"
                        data-target="#blockuseradded"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <button className="px-4 mx-1 py-1 mt-2">Yes</button>
                      </a>
                      <a href="#_" data-dismiss="modal" aria-label="Close">
                        <button className="px-4 mx-1 py-1 mt-2">No</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
