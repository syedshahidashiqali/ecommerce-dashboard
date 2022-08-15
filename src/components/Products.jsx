import { useState } from "react";
import { ALLPRODUCTS } from "../assets/Helpers/apiUrls";
import { useGetApi } from "../assets/Hooks/useGetApi";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getProducts } from "../assets/Services/Products";
import Table from "./Table";
import TableSearch from "./TableSearch";

function Products() {
  const [prodUrl, setProdUrl] = useState(ALLPRODUCTS);
  const [searchProd, setSearchProd] = useState("");
  const [filterValue, setFilterValue] = useState(null);

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { detail } = await getProducts(filterValue);
    setProducts(detail);
  };

  useEffect(() => {
    fetchProducts();
  }, [products?.length, filterValue]);

  const fields = [
    {
      label: "Product Name",
      key: "name",
    },
    {
      label: "Price",
      key: "price",
    },
    {
      label: "Description",
      key: "description",
    },
    {
      label: "Added On",
      key: "createdAt",
    },
  ];
  return (
    <>
      <h3 className="pull-left bold uppercase black mt-2">Products</h3>
      <div className="clearfix" />
      <div className="card jost pad-20 mt-2 rounded-1">
        <div className="card-content collapse show">
          <div className="card-body table-responsive card-dashboard">
            <div className="clearfix" />
            <div className="">
              <TableSearch
                onSearch={(value) => setFilterValue(value)}
                // onFilterChange={(value) => setLimit(value)}
                filterValues={[10, 50, 100]}
              />
              <Table
                // pageChanged={(page) => fetchData(page)}
                fields={fields}
                data={products}
                hasPagination={false}
                extraHeads={() => (
                  <th className="d-grey text-center bold">Action</th>
                )}
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
                          className="dropdown-item"
                          to={`/products/${item._id}/reviews`}
                        >
                          <i className="fa fa-eye" />
                          Reviews
                        </Link>
                        <Link
                          className="dropdown-item"
                          to={`/products/edit/${item._id}`}
                        >
                          <i className="fa fa-trash" />
                          Edit
                        </Link>
                      </div>
                    </div>
                  </td>
                )}
              />
              {/* <table className="table text-center table-striped table-bordered zero-configuration">
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
              </table> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
