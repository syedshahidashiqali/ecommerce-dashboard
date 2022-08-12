import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postApi } from "../assets/Helpers/api";
import { CREATEPRODUCT } from "../assets/Helpers/apiUrls";

function ProductCreate() {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    description: "",
  });

  const updateState = (data) => {
    setProductData((prev) => ({ ...prev, ...data }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await postApi(CREATEPRODUCT, {
      name: productData.title,
      price: productData.price,
      description: productData.description,
    });
    if (data.status === true) {
      alert(data.message);
      navigate("/products");
    } else {
      alert(data.message);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <h3 className="pull-left bold uppercase black mt-2">Products</h3>
      <div className="clearfix" />
      <h3 className="pull-left bold black mt-2 mb-0 pb-0">Add New Product</h3>
      <div className="clearfix" />
      <h4 className="bold grey_bck p-1 mt-4">Product Variations</h4>
      <div className="row align-items-center">
        <div className="col-sm-4 mt-2 col-lg-3">
          <p className="black p_sm ml-1">Title</p>
        </div>
        <div className="col-lg-4 mt-2 col-sm-8">
          <input
            type="text"
            className="w-100"
            onChange={(e) => updateState({ title: e.target.value })}
            value={productData.title}
            placeholder="Product Title"
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
            onChange={(e) => updateState({ price: e.target.value })}
            value={productData.price}
            placeholder="Product Price"
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
            onChange={(e) => updateState({ description: e.target.value })}
            value={productData.description}
            placeholder="Product Description"
          />
        </div>
      </div>
      <hr className="mt-3" />
      <a href="product-inventory.html">
        <button type="submit" className="px-2 mt-5 py-1">
          Add new Product
        </button>
      </a>
    </form>
  );
}

export default ProductCreate;
