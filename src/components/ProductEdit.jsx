import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getApi, updateApi } from "../assets/Helpers/api";
import { PRODUCT, PRODUCTUPDATE } from "../assets/Helpers/apiUrls";
import { useGetApi } from "../assets/Hooks/useGetApi";
import { getProduct } from "../assets/Services/Products";

function ProductEdit() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  // const fetchData = async () => {
  //   const data = await getApi(`${PRODUCT}/${productId}`);
  //   console.log("data iss:", data);
  //   setProduct(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [product?.message]);
  // console.log(product);

  // const product = useGetApi(`${PRODUCT}/${productId}`);

  const fetchProduct = async () => {
    const { detail } = await getProduct(productId);
    setProduct(detail);
  };

  useEffect(() => {
    fetchProduct();
  }, [product?._id]);
  console.log(product);

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
          <p className="l-grey p_sm">{product?.name}</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-4 mt-1 col-lg-3">
          <p className="black p_sm ml-1">Price</p>
        </div>
        <div className="mt-1 col-sm-8">
          <p className="l-grey p_sm">${product?.price}</p>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-4 mt-1 col-lg-3">
          <p className="black p_sm ml-1">Description</p>
        </div>
        <div className="mt-1 col-sm-8">
          <p className="l-grey p_sm">{product?.description}</p>
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
    </>
  );
}

export default ProductEdit;
