import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getApi, updateApi } from "../assets/Helpers/api";
import { PRODUCT, PRODUCTUPDATE } from "../assets/Helpers/apiUrls";
import { useGetApi } from "../assets/Hooks/useGetApi";

function ProductEdit() {
  const { productId } = useParams();
  // const [product, setProduct] = useState();

  // const fetchData = async () => {
  //   const data = await getApi(`${PRODUCT}/${productId}`);
  //   console.log("data iss:", data);
  //   setProduct(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [product?.message]);
  // console.log(product);

  const product = useGetApi(`${PRODUCT}/${productId}`);

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const updateState = (data) => {
    setProductData((prev) => ({ ...prev, ...data }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {};
    if (productData.name !== "") {
      body.name = productData.name;
    }
    if (productData.description !== "") {
      body.description = productData.description;
    }
    if (productData.price !== "") {
      body.price = productData.price;
    }
    const data = await updateApi(`${PRODUCTUPDATE}/${productId}`, body);

    if (data?.status === true) {
      alert("Product has been updated");
    } else {
      alert(data.message);
    }
    console.log(data);
  };
  return (
    <>
      <a href="product-inventory.html">
        <h3 className="pull-left bold uppercase black mt-2">
          <i className="fas fa-angle-left" /> Products
        </h3>
      </a>
      <div className="clearfix" />
      <h3 className="pull-left medium black p_lg mt-2 mb-0 pb-0">
        Edit Product
      </h3>
      <div className="clearfix" />
      <h4 className="bold grey_bck p-1 mt-4">Description</h4>
      <div className="row align-items-center">
        <div className="col-sm-4 mt-2 col-lg-3">
          <p className="black p_sm ml-1">Title</p>
        </div>
        <div className="mt-2 col-sm-8">
          <p className="l-grey p_sm">{product?.detail?.name}</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-4 mt-1 col-lg-3">
          <p className="black p_sm ml-1">Price</p>
        </div>
        <div className="mt-1 col-sm-8">
          <p className="l-grey p_sm">${product?.detail?.price}</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-4 mt-1 col-lg-3">
          <p className="black p_sm ml-1">Description</p>
        </div>
        <div className="mt-1 col-sm-8">
          <p className="l-grey p_sm">{product?.detail?.description}</p>
        </div>
      </div>
      <h4 className="bold grey_bck p-1 mt-4">Set Variations</h4>
      <form onSubmit={submitHandler}>
        <div className="row align-items-center">
          <div className="col-sm-4 mt-1 col-lg-3">
            <p className="black p_sm ml-1">Name</p>
          </div>
          <div className="col-lg-4 mt-1 col-sm-8">
            <input
              type="text"
              className="w-100"
              value={productData.name}
              onChange={(e) => updateState({ name: e.target.value })}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-4 mt-1 col-lg-3">
            <p className="black p_sm ml-1">Description</p>
          </div>
          <div className="col-lg-4 mt-1 col-sm-8">
            <input
              type="text"
              className="w-100"
              value={productData.description}
              onChange={(e) => updateState({ description: e.target.value })}
            />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-sm-4 mt-1 col-lg-3">
            <p className="black p_sm ml-1">Price</p>
          </div>
          <div className="col-lg-4 mt-1 col-sm-8">
            <input
              type="text"
              className="w-100"
              value={productData.price}
              onChange={(e) => updateState({ price: e.target.value })}
            />
          </div>
        </div>
        <a href="product-inventory.html">
          <button type="submit" className="px-5 mt-5 py-1">
            Update
          </button>
        </a>
      </form>
      <div
        className="modal fade"
        id="logout"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close text-right clr-orange mr-1 mt-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="px-2 pb-5 text-center">
              <img src="images/alert.png" alt="" className="img-fluid" />
              <h3 className="jost bold mt-1 clr-orange">Alert</h3>
              <p className="d-blue mt-1 medium ">
                Are you sure you want to Logout?
              </p>
              <div className="d-flex flex-wrap justify-content-center">
                <a href="admin-login.html">
                  <button className="px-4 mx-1 py-1 mt-2">Yes</button>
                </a>
                <a href="#_">
                  <button
                    className="px-4 mx-1 py-1 mt-2"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    No
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductEdit;
