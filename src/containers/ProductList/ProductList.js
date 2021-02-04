import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../Store/actions/getProductListAction";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import store from "../../Store/store";

const ProductList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.productListRequest());
  }, [dispatch]);
  const products = (state) => state.data;

  // const products = useSelector((state) => state.productListReducer);
  console.log("prod", products);
  return (
    <div>
      {/* {products.map((product) => (
        <div key={product.name}>
          <div className="product">
            <span role="img" aria-label={product.name}>
              {product.name}
            </span>
          </div>
          <button>Add</button>
          <button>Remove</button>
        </div>
      ))} */}
      <SingleProduct />
    </div>
  );
};

export default ProductList;
