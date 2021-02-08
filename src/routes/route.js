import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProductList from "../containers/ProductList/ProductList";
import ProductDetails from "../containers/ProductDetails/ProductDetails";
function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/details/:id" component={ProductDetails} />
        <Route exact={true} path="**" component={ProductList} />
      </Switch>
    </div>
  );
}

export default Routes;
