import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../Store/actions/getProductListAction";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//style
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const ProductList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.productListRequest());
  }, [dispatch]);
  const products = useSelector((state) => state.productListReducer.products);
  const { fetching, error } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} style={{ width: "100%", marginTop: "15px" }}>
        <Grid style={{ marginLeft: "45px" }} container item xs={12} spacing={1}>
          {fetching ? (
            <p>Fetching</p>
          ) : error ? (
            <p>Eroor...</p>
          ) : products && products.length > 0 ? (
            products.map((product) => (
              <React.Fragment key={product.id} className="">
                <Grid className="mb-5" item xs={4}>
                  <br />
                  <SingleProduct
                    className=""
                    key={product.id}
                    product={product}
                  />
                </Grid>
              </React.Fragment>
            ))
          ) : (
            <p className="text-center">No Products Available</p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
